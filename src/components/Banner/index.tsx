"use client";

import * as S from "./style";

import Image from "next/image";

const Banner = () => (
  <S.Wrapper>
    {[1, 2, 3].map((number) => (
      <Image key={number} src={`/banner/${number}`} alt="배너이미지" fill />
    ))}
  </S.Wrapper>
);

export default Banner;
