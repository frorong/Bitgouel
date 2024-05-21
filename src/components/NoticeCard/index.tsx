"use client";

import * as S from "./style";

import { NoticeType } from "@/types";

interface Props {
  notice: NoticeType;
}

const NoticeCard: React.FC<Props> = ({
  notice: { title, date, id, description },
}) => {
  return (
    <S.Card>
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
