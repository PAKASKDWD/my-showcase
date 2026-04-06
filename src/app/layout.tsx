import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "마이 쇼케이스 | 내가 만든 것들",
  description: "픽셀 아트 스타일의 개인 프로젝트 쇼케이스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
