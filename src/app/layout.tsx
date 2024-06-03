import type { Metadata } from "next";

import { Header } from "@/components";
import Providers from "./providers";

import { GoogleAnalytics } from "@/components";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "빛고을배드민턴클럽 홈패이지",
  description: "빛고을배드민턴클럽의 홈패이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
