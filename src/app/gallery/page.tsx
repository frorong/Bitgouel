import { NotionPage } from "@/pageContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "갤러리 | Bitguoel",
  description: "빛고을배드민턴클럽의 행사갤러리 페이지입니다.",
};

export default function Gallery() {
  return <NotionPage postType="gallery" />;
}
