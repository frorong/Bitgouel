"use client";

import { notice, gallery } from "@/constant";
import { NoticeCard } from "@/components";

import * as S from "./style";

interface Props {
  postType: "notice" | "gallery";
}

const TITLE = {
  notice: "공지사항",
  gallery: "행사갤러리",
} as const;

const CONTENT = {
  notice: notice,
  gallery: gallery,
} as const;

const NotionListPage: React.FC<Props> = ({ postType }) => {
  return (
    <S.CardContainer>
      <S.Title>{TITLE[postType]}</S.Title>
      {CONTENT[postType].map((item) => (
        <NoticeCard key={item.id} notice={item} postType={postType} />
      ))}
    </S.CardContainer>
  );
};

export default NotionListPage;
