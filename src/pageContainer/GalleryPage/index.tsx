"use client";

import { gallery } from "@/constant";
import { NoticeCard } from "@/components";

import * as S from "./style";

const GalleryPage = () => {
  return (
    <S.CardContainer>
      <S.Title>행사갤러리</S.Title>
      {gallery.map((item) => (
        <NoticeCard key={item.id} notice={item} />
      ))}
    </S.CardContainer>
  );
};

export default GalleryPage;
