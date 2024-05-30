"use client";

import * as S from "./style";

import Image from "next/image";

const Section1 = () => (
  <S.Section>
    <S.ImageWrapper>
      <Image fill src="/Introduce/test3.png" alt="cover" />
    </S.ImageWrapper>
    <S.TitleWrapper>
      <S.Title>빛고을 배드민턴 클럽에</S.Title>
      <S.Title>오신 것을 환영합니다.</S.Title>
    </S.TitleWrapper>
  </S.Section>
);

export default Section1;
