"use client";

import * as S from "./style";

import { Section1, Section2, Section3 } from "@/components/Introduce";

const IntroducePage = () => (
  <S.IntroduceWrapper>
    <Section1 />
    <Section2 />
    <Section3 />
  </S.IntroduceWrapper>
);

export default IntroducePage;
