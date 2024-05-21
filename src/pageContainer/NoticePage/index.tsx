"use client";

import { notice } from "@/constant";
import { NoticeCard } from "@/components";

import * as S from "./style";

const NoticePage = () => {
  return (
    <S.CardContainer>
      {notice.map((item) => (
        <NoticeCard key={item.id} notice={item} />
      ))}
    </S.CardContainer>
  );
};

export default NoticePage;
