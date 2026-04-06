import Link from "next/link";

const projects = [
  {
    title: "프로젝트 1",
    description: "첫 번째 프로젝트 설명을 여기에 적어주세요.",
    tags: ["Next.js", "TypeScript"],
    color: "#6BCB77",
    link: "#",
    delay: "delay-200",
  },
  {
    title: "프로젝트 2",
    description: "두 번째 프로젝트 설명을 여기에 적어주세요.",
    tags: ["React", "Tailwind"],
    color: "#4D96FF",
    link: "#",
    delay: "delay-300",
  },
  {
    title: "프로젝트 3",
    description: "세 번째 프로젝트 설명을 여기에 적어주세요.",
    tags: ["Spring Boot", "PostgreSQL"],
    color: "#FFD93D",
    link: "#",
    delay: "delay-400",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-4" style={{ backgroundColor: "#f3e4da" }}>
      {/* 상단 네비게이션 */}
      <div className="fixed top-0 left-0 right-0 z-50 px-3 py-2 md:px-4 md:py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 border-3 border-black shadow-brutal-sm hover-lift text-sm min-h-[44px]"
          style={{ backgroundColor: "#fff", color: "#2a1810" }}
        >
          <span>←</span>
          돌아가기
        </Link>
      </div>

      <div className="max-w-3xl mx-auto pt-8">
        <h1 className="text-3xl md:text-4xl text-center mb-2 animate-fade-in-up">
          🖼️ 프로젝트
        </h1>
        <p className="text-center opacity-70 mb-10 animate-fade-in-up delay-100">
          직접 만든 프로젝트들을 소개합니다
        </p>

        <div className="grid gap-5">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className={`btn-card hover-lift border-3 border-black p-5 shadow-brutal animate-fade-in-up ${project.delay}`}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="flex items-start gap-4">
                {/* 색상 인디케이터 */}
                <div
                  className="w-3 h-full min-h-[60px] shrink-0 border-2 border-black"
                  style={{ backgroundColor: project.color }}
                />
                <div className="flex-1">
                  <h2 className="text-xl mb-1">{project.title}</h2>
                  <p className="text-sm opacity-70 mb-3">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border-2 border-black shadow-brutal-sm"
                        style={{ backgroundColor: "#f3e4da" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
