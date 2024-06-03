import type { Metadata } from "next";

import { Header } from "@/components";
import Providers from "./providers";

import { GoogleAnalytics } from "@/components";

import { Suspense } from "react";

export const metadata: Metadata = {
  title: "빛고을배드민턴클럽 홈페이지",
  description: "빛고을배드민턴클럽의 홈페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
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
