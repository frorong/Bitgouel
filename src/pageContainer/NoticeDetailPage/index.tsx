"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import { ReturnChevronIcon } from "@/assets";

import * as S from "./style";

const NOTICE_LIST_PATH = "/notice" as const;

interface Props {
  recordMap: ExtendedRecordMap;
}

const NoticeDetailPage: React.FC<Props> = ({ recordMap }) => {
  return (
    <S.Wrapper>
      <S.ReturnButton href={NOTICE_LIST_PATH}>
        <ReturnChevronIcon />
        <S.ReturnText>뒤로가기</S.ReturnText>
      </S.ReturnButton>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </S.Wrapper>
  );
};

export default NoticeDetailPage;
