import Link from "next/link";
import PixelCharacter from "@/components/PixelCharacter";
import SnsButtons from "@/components/SnsButtons";
import NavCard from "@/components/NavCard";
import NpcChat from "@/components/NpcChat";

const navCards = [
  {
    title: "프로젝트",
    emoji: "🖼️",
    description: "직접 만든 프로젝트들을 구경하세요!",
    color: "#6BAF8D",
    href: "/projects",
    tooltipPosition: "right" as const,
    delay: "delay-300",
  },
  {
    title: "소개",
    emoji: "👋",
    description: "저는 이런 사람이에요!",
    color: "#E8785E",
    href: "/about",
    tooltipPosition: "right" as const,
    delay: "delay-400",
  },
  {
    title: "블로그",
    emoji: "📝",
    description: "개발 이야기와 경험을 공유합니다!",
    color: "#E8A87C",
    href: "/blog",
    tooltipPosition: "left" as const,
    delay: "delay-500",
  },
  {
    title: "연락하기",
    emoji: "💌",
    description: "궁금한 점이 있으면 연락주세요!",
    color: "#7BA7C9",
    href: "/contact",
    tooltipPosition: "left" as const,
    delay: "delay-600",
  },
];

export default function Home() {
  return (
    <div className="home-hero flex flex-col items-center justify-center relative px-4">
      {/* 상단 UI */}
      <div className="fixed top-0 left-0 right-0 z-50 px-3 py-2 md:px-4 md:py-4">
        <div className="flex justify-between items-start">
          {/* 좌측: 홈 */}
          <div className="animate-fade-in-up delay-100">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2.5 border-3 border-black shadow-brutal-sm hover-lift text-sm min-h-[44px]"
              style={{ backgroundColor: "#fff", color: "#2a1810" }}
            >
              <span>🏠</span>
              홈
            </Link>
          </div>

          {/* 우측: SNS */}
          <SnsButtons />
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col items-center gap-6">
        {/* 캐릭터 */}
        <div className="animate-pop-in delay-200">
          <PixelCharacter />
        </div>

        {/* 타이틀 */}
        <div className="text-center animate-fade-in-up delay-300">
          <h1 className="text-3xl md:text-4xl mb-2">마이 쇼케이스</h1>
          <p className="text-base md:text-lg opacity-80">
            내가 만든 것들을 모아놓은 공간
            <span className="typing-cursor" />
          </p>
        </div>

        {/* 네비게이션 카드 */}
        <div className="grid grid-cols-2 gap-4 md:gap-5 mt-6">
          {navCards.map((card) => (
            <NavCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      {/* NPC 챗봇 */}
      <NpcChat />
    </div>
  );
}
