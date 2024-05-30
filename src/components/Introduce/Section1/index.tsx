"use client";

import * as S from "./style";

import Image from "next/image";

interface Props {
  forwardRef?: any;
}

const Section1: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <S.ImageWrapper>
      <Image fill src="/Introduce/section1.png" alt="cover" />
    </S.ImageWrapper>
    <S.TitleWrapper>
      <S.Title>빛고을 배드민턴 클럽에</S.Title>
      <S.Title>오신 것을 환영해요!!</S.Title>
    </S.TitleWrapper>
  </S.Section>
);

export default Section1;
