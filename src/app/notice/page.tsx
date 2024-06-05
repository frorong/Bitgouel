import { NotionPage } from "@/pageContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지 | Bitguoel",
  description: "빛고을배드민턴클럽의 공지 페이지입니다.",
};

export default function Notice() {
  return <NotionPage postType="notice" />;
}
