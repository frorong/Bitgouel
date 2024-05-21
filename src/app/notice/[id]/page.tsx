import "react-notion-x/src/styles.css";

import { NoticeDetailPage } from "@/pageContainer";
import { notion } from "@/lib";
import { notice } from "@/constant";

import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "빛고을배드민턴클럽 홈패이지",
  description: "빛고을배드민턴클럽의 홈패이지입니다.",
};

const NOTICE_LIST_PATH = "/notice" as const;

interface Params {
  params: {
    id: string;
  };
}

export default async function Notice({ params: { id } }: Params) {
  const currentNotice = notice[parseInt(id)];

  if (!currentNotice) return redirect(NOTICE_LIST_PATH);

  const recordMap = await notion.getPage(currentNotice.notionLink);
  return <NoticeDetailPage recordMap={recordMap} />;
}
