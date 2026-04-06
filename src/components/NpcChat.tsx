"use client";

import { useState } from "react";

interface ChatMessage {
  speaker: "npc" | "player";
  text: string;
}

interface DialogOption {
  label: string;
  response: string;
  followUp?: DialogOption[];
}

const dialogTree: DialogOption[] = [
  {
    label: "누구세요?",
    response: "나는 이 쇼케이스의 안내 NPC야! 여기서 만든 프로젝트들을 구경할 수 있어.",
    followUp: [
      {
        label: "어떤 프로젝트가 있어요?",
        response:
          "RockFind라는 야외 볼더링 가이드 앱을 만들고 있어! Android 앱 + Spring Boot 백엔드 + Next.js 어드민까지. 프로젝트 페이지에서 자세히 볼 수 있어.",
      },
      {
        label: "기술 스택이 궁금해요",
        response:
          "백엔드는 Spring Boot + PostgreSQL, 프론트는 Next.js + TypeScript, 모바일은 Kotlin MVVM 패턴으로 개발해. Docker로 배포하고 있고!",
      },
    ],
  },
  {
    label: "이 사이트는 뭐예요?",
    response:
      "직접 만든 프로젝트들을 모아놓은 개인 쇼케이스야. 픽셀아트 스타일이 마음에 들지?",
  },
  {
    label: "연락하고 싶어요",
    response: "연락하기 페이지에서 GitHub이나 이메일로 연락할 수 있어! 편하게 말 걸어줘.",
  },
  {
    label: "안녕히 계세요!",
    response: "다음에 또 놀러 와! 새로운 프로젝트가 추가될 수도 있으니까.",
  },
];

export default function NpcChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { speaker: "npc", text: "안녕! 쇼케이스에 온 걸 환영해. 궁금한 거 있으면 물어봐!" },
  ]);
  const [currentOptions, setCurrentOptions] = useState<DialogOption[]>(dialogTree);

  const handleOption = (option: DialogOption) => {
    const newMessages: ChatMessage[] = [
      ...messages,
      { speaker: "player", text: option.label },
      { speaker: "npc", text: option.response },
    ];
    setMessages(newMessages);
    setCurrentOptions(option.followUp ?? dialogTree);
  };

  const handleReset = () => {
    setMessages([
      { speaker: "npc", text: "또 궁금한 거 있어? 뭐든 물어봐!" },
    ]);
    setCurrentOptions(dialogTree);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 border-3 border-black shadow-brutal hover-lift px-4 py-3 text-sm animate-pop-in delay-700 min-h-[44px]"
        style={{ backgroundColor: "#FFD700", color: "#2a1810" }}
      >
        💬 NPC에게 말 걸기
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[320px] md:w-[360px] animate-pop-in">
      {/* 대화창 헤더 */}
      <div
        className="flex items-center justify-between px-4 py-2 border-3 border-b-0 border-black"
        style={{ backgroundColor: "#2a1810" }}
      >
        <span style={{ color: "#FFD700", fontSize: "14px" }}>💬 안내 NPC</span>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:opacity-70 text-lg leading-none"
        >
          ✕
        </button>
      </div>

      {/* 대화 내용 */}
      <div
        className="border-3 border-b-0 border-black p-3 overflow-y-auto"
        style={{
          backgroundColor: "#1a1a2e",
          maxHeight: "240px",
          minHeight: "160px",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.speaker === "player" ? "text-right" : ""}`}>
            {msg.speaker === "npc" ? (
              <div>
                <span style={{ color: "#FFD700", fontSize: "12px" }}>NPC</span>
                <p style={{ color: "#F5DEB3", fontSize: "14px", lineHeight: 1.6 }}>
                  {msg.text}
                </p>
              </div>
            ) : (
              <div>
                <span style={{ color: "#6BCB77", fontSize: "12px" }}>나</span>
                <p style={{ color: "#B0E0B0", fontSize: "14px", lineHeight: 1.6 }}>
                  {msg.text}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 선택지 */}
      <div
        className="border-3 border-black p-2 flex flex-col gap-1.5"
        style={{ backgroundColor: "#2a1810" }}
      >
        {currentOptions.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOption(option)}
            className="text-left px-3 py-2 border-2 text-sm hover-lift min-h-[40px]"
            style={{
              borderColor: "#8B4513",
              backgroundColor: "#3a2820",
              color: "#F5DEB3",
            }}
          >
            ▸ {option.label}
          </button>
        ))}
        {currentOptions !== dialogTree && (
          <button
            onClick={handleReset}
            className="text-left px-3 py-2 border-2 text-sm hover-lift min-h-[40px]"
            style={{
              borderColor: "#555",
              backgroundColor: "#333",
              color: "#aaa",
            }}
          >
            ↩ 처음으로
          </button>
        )}
      </div>
    </div>
  );
}
