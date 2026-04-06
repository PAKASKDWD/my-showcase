import Link from "next/link";

const posts = [
  {
    title: "첫 번째 글 제목",
    date: "2026-04-06",
    summary: "블로그 글 요약을 여기에 적어주세요.",
    tag: "개발",
  },
  {
    title: "두 번째 글 제목",
    date: "2026-04-05",
    summary: "블로그 글 요약을 여기에 적어주세요.",
    tag: "일상",
  },
];

export default function BlogPage() {
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

      <div className="max-w-3xl mx-auto pt-8">
        <h1 className="text-3xl md:text-4xl text-center mb-2 animate-fade-in-up">
          📝 블로그
        </h1>
        <p className="text-center opacity-70 mb-10 animate-fade-in-up delay-100">
          개발 이야기와 경험을 공유합니다
        </p>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={`btn-card hover-lift border-3 border-black p-5 animate-fade-in-up delay-${(i + 2) * 100}`}
              style={{ backgroundColor: "#fff" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2 py-0.5 text-xs border-2 border-black"
                  style={{ backgroundColor: "#E8A87C" }}
                >
                  {post.tag}
                </span>
                <span className="text-xs opacity-50">{post.date}</span>
              </div>
              <h2 className="text-lg mb-1">{post.title}</h2>
              <p className="text-sm opacity-70">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
