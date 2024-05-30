"use client";

import * as S from "./style";

interface Props {
  forwardRef?: any;
}

const Section3: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}></S.Section>
);

export default Section3;
