import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GR831 약술형논술 콘텐츠 공급 가맹 | GR831약술형논술연구소",
  description:
    "2026학년도 가천대 135명 합격 GR831의 콘텐츠 공급 가맹. 강사진은 있지만 콘텐츠 제작이 어려운 학원에 검증된 자료 그대로. 본사 직접 채점, 매주 성적표 자동 발송.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSerifKR.variable} antialiased`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-dvh font-sans">
        <Header />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
