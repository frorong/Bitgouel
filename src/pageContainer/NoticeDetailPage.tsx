"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

interface Props {
  recordMap: ExtendedRecordMap;
}

const NoticeDetailPage: React.FC<Props> = ({ recordMap }) => {
  return (
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
  );
};

export default NoticeDetailPage;
