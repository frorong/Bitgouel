import "react-notion-x/src/styles.css";

import { NoticeDetailPage } from "@/pageContainer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "빛고을배드민턴클럽 홈패이지",
  description: "빛고을배드민턴클럽의 홈패이지입니다.",
};

interface Params {
  params: {
    id: string;
  };
}

export default function Notice({ params: { id } }: Params) {
  return <NoticeDetailPage id={id} />;
}
