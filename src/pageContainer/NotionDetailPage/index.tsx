"use client";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";

import { ReturnChevronIcon } from "@/assets";

import * as S from "./style";

interface Props {
  recordMap: ExtendedRecordMap;
  postType: "notice" | "gallery";
}

const PATH = {
  notice: "/notice",
  gallery: "/gallery",
} as const;

const NotionDetailPage: React.FC<Props> = ({ recordMap, postType }) => {
  return (
    <S.Wrapper>
      <S.ReturnButton href={PATH[postType]}>
        <ReturnChevronIcon />
        <S.ReturnText>뒤로가기</S.ReturnText>
      </S.ReturnButton>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </S.Wrapper>
  );
};

export default NotionDetailPage;
