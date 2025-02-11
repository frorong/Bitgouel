import "react-notion-x/src/styles.css";

import { NotionDetailPage } from "@/pageContainer";
import { notion } from "@/lib";
import { notice } from "@/constant";

import { redirect, notFound } from "next/navigation";
import type { Metadata } from "next";

const NOTICE_LIST_PATH = "/notice" as const;

interface Params {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  try {
    const { title, description } = notice[parseInt(params.id)];

    return {
      title: { absolute: title },
      description: description.slice(120),
      openGraph: {
        title: title,
        description: description.slice(120),
      },
    };
  } catch (e) {
    return notFound();
  }
};

export default async function Notice({ params: { id } }: Params) {
  const currentNotice = notice[parseInt(id)];

  if (!currentNotice) return redirect(NOTICE_LIST_PATH);

  const recordMap = await notion.getPage(currentNotice.notionLink);
  return <NotionDetailPage postType="notice" recordMap={recordMap} />;
}
