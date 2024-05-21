"use client";

import { NotionRenderer } from "react-notion-x";
import { NotionAPI } from "notion-client";
import { ExtendedRecordMap } from "notion-types";

import { useRouter } from "next/navigation";

import { notice } from "@/constant";

import { useEffect, useState } from "react";

interface Props {
  id: string;
}

const NOTICE_LIST_PATH = "/notice" as const;

const getMap = async (notionLink: string) => {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(notionLink);

  return recordMap;
};

const NoticeDetailPage: React.FC<Props> = ({ id }) => {
  const { push } = useRouter();

  const [map, setMap] = useState<ExtendedRecordMap>();

  const currentNotice = notice[parseInt(id)];

  if (!currentNotice) push(NOTICE_LIST_PATH);

  const setNewMap = async () => {
    const newMap = await getMap(currentNotice.notionLink);
    setMap(newMap);
  };

  useEffect(() => {
    setNewMap();
  }, []);

  return (
    <>
      {map && (
        <NotionRenderer recordMap={map} fullPage={true} darkMode={false} />
      )}
    </>
  );
};

export default NoticeDetailPage;
