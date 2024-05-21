"use client";

import * as S from "./style";

import { NoticeType } from "@/types";

interface Props {
  notice: NoticeType;
}

const NoticeCard: React.FC<Props> = ({ notice: { title, date, id } }) => {
  return (
    <S.Card>
      <S.Id>{id}</S.Id>
      <S.Title>{title}</S.Title>
      <S.Date>{date}</S.Date>
    </S.Card>
  );
};

export default NoticeCard;
