"use client";

import * as S from "./style";

import { Banner } from "@/components";

interface Props {
  forwardRef?: any;
}

const Section1: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <Banner />
  </S.Section>
);

export default Section1;
