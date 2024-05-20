import type { Metadata } from "next";

import { Header } from "@/components";
import Providers from "./providers";

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
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
