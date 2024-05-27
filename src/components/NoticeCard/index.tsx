"use client";

import * as S from "./style";

import { NoticeType } from "@/types";

const NOTICE_LIST_PATH = "/notice" as const;
const GALLERY_LIST_PATH = "/gallery" as const;

interface Props {
  notice: NoticeType;
  postType: "notice" | "gallery";
}

const DETAIL_PATH = {
  notice: NOTICE_LIST_PATH,
  gallery: GALLERY_LIST_PATH,
} as const;

const NoticeCard: React.FC<Props> = ({
  notice: { title, date, id, description },
  postType,
}) => {
  return (
    <S.Card href={`${DETAIL_PATH[postType]}/${id}`}>
      <S.InfoWrapper>
        <S.Id>#{id + 1}</S.Id>
        <S.Date>{date}</S.Date>
      </S.InfoWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Card>
  );
};

export default NoticeCard;
