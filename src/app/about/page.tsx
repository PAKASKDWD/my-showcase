import Link from "next/link";
import PixelCharacter from "@/components/PixelCharacter";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{ backgroundColor: "#f3e4da" }}>
      <div className="fixed top-0 left-0 right-0 z-50 px-3 py-2 md:px-4 md:py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 border-3 border-black shadow-brutal-sm hover-lift text-sm"
          style={{ backgroundColor: "#fff", color: "#2a1810" }}
        >
          <span>←</span>
          돌아가기
        </Link>
      </div>

      <div className="max-w-2xl mx-auto pt-8">
        <div className="flex flex-col items-center mb-10">
          <div className="animate-pop-in">
            <PixelCharacter />
          </div>
          <h1 className="text-3xl md:text-4xl mt-4 animate-fade-in-up delay-200">
            👋 소개
          </h1>
        </div>

        <div
          className="border-3 border-black p-6 md:p-8 animate-fade-in-up delay-300"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="space-y-4 text-base leading-relaxed">
            <p>안녕하세요! 저는 개발을 좋아하는 사람입니다.</p>
            <p>이 공간은 제가 만든 프로젝트들을 모아놓은 쇼케이스예요.</p>

            <div className="border-t-2 border-dashed border-black/20 pt-4 mt-6">
              <h2 className="text-xl mb-3" style={{ color: "#E8785E" }}>
                🛠️ 기술 스택
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Spring Boot", "Kotlin", "PostgreSQL", "Docker"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm border-2 border-black shadow-brutal-sm"
                      style={{ backgroundColor: "#f3e4da" }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="border-t-2 border-dashed border-black/20 pt-4">
              <h2 className="text-xl mb-3" style={{ color: "#6BAF8D" }}>
                🎯 관심 분야
              </h2>
              <ul className="space-y-1 text-sm">
                <li>• 여기에 관심 분야를 적어주세요</li>
                <li>• 예: 웹 개발, 모바일 앱, AI 등</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
