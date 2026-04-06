import Link from "next/link";

const contacts = [
  {
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com",
    emoji: "💻",
    color: "#333",
    delay: "delay-200",
  },
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    emoji: "📧",
    color: "#EA4335",
    delay: "delay-300",
  },
  {
    label: "Blog",
    value: "your-blog.com",
    href: "#",
    emoji: "📝",
    color: "#2a1810",
    delay: "delay-400",
  },
];

export default function ContactPage() {
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
        <h1 className="text-3xl md:text-4xl text-center mb-2 animate-fade-in-up">
          💌 연락하기
        </h1>
        <p className="text-center opacity-70 mb-10 animate-fade-in-up delay-100">
          궁금한 점이 있으면 편하게 연락주세요
        </p>

        <div className="space-y-4">
          {contacts.map((contact, i) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-card hover-lift flex items-center gap-4 border-3 border-black p-5 shadow-brutal animate-fade-in-up ${contact.delay}`}
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center border-2 border-black text-2xl text-white shrink-0"
                style={{ backgroundColor: contact.color }}
              >
                {contact.emoji}
              </div>
              <div>
                <div className="text-base font-bold">{contact.label}</div>
                <div className="text-sm opacity-70">{contact.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
