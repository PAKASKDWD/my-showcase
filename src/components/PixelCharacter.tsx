"use client";

export default function PixelCharacter() {
  return (
    <div className="animate-float" style={{ imageRendering: "pixelated" }}>
      <svg
        width="160"
        height="160"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: "pixelated" }}
      >
        {/* 모니터 본체 */}
        <rect x="2" y="2" width="12" height="9" fill="#4A4A4A" />
        <rect x="3" y="3" width="10" height="7" fill="#1a1a2e" />

        {/* 화면 내용 - 코드 라인 */}
        <rect x="4" y="4" width="4" height="1" fill="#6BCB77" />
        <rect x="4" y="5" width="6" height="1" fill="#4D96FF" />
        <rect x="5" y="6" width="5" height="1" fill="#FFD93D" />
        <rect x="4" y="7" width="3" height="1" fill="#FF6B6B" />
        <rect x="5" y="8" width="4" height="1" fill="#6BCB77" />

        {/* 커서 깜빡임 */}
        <rect x="10" y="8" width="1" height="1" fill="#fff" opacity="0.8">
          <animate
            attributeName="opacity"
            values="0.8;0;0.8"
            dur="1s"
            repeatCount="indefinite"
          />
        </rect>

        {/* 모니터 받침대 */}
        <rect x="6" y="11" width="4" height="1" fill="#666" />
        <rect x="5" y="12" width="6" height="1" fill="#555" />

        {/* 선글라스 (모니터 위에) */}
        <rect x="3" y="1" width="4" height="2" fill="#222" rx="0" />
        <rect x="9" y="1" width="4" height="2" fill="#222" rx="0" />
        <rect x="7" y="1" width="2" height="1" fill="#222" />

        {/* 선글라스 렌즈 반사 */}
        <rect x="4" y="1" width="1" height="1" fill="#6af" opacity="0.4" />
        <rect x="10" y="1" width="1" height="1" fill="#6af" opacity="0.4" />

        {/* 키보드 */}
        <rect x="3" y="13" width="10" height="2" fill="#555" />
        <rect x="4" y="13.5" width="1" height="0.8" fill="#777" />
        <rect x="5.5" y="13.5" width="1" height="0.8" fill="#777" />
        <rect x="7" y="13.5" width="2" height="0.8" fill="#777" />
        <rect x="9.5" y="13.5" width="1" height="0.8" fill="#777" />
        <rect x="11" y="13.5" width="1" height="0.8" fill="#777" />
      </svg>
    </div>
  );
}
