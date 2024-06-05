import "react-notion-x/src/styles.css";

import { NotionDetailPage } from "@/pageContainer";
import { notion } from "@/lib";
import { gallery } from "@/constant";

import { redirect, notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "빛고을배드민턴클럽 홈패이지",
  description: "빛고을배드민턴클럽의 홈패이지입니다.",
};

const GALLERY_LIST_PAGE = "/gallery" as const;

interface Params {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params,
}: Params): Promise<Metadata> => {
  try {
    const { title, description } = gallery[parseInt(params.id)];

    return {
      title: { absolute: title },
      description: description.slice(120),
      openGraph: {
        title: title,
        description: description.slice(120),
        url: `https://www.frorong.shop/gallery/${params.id}`,
      },
    };
  } catch (e) {
    return notFound();
  }
};

export default async function Gallery({ params: { id } }: Params) {
  const currentGallery = gallery[parseInt(id)];

  if (!currentGallery) return redirect(GALLERY_LIST_PAGE);

  const recordMap = await notion.getPage(currentGallery.notionLink);
  return <NotionDetailPage postType="gallery" recordMap={recordMap} />;
}
