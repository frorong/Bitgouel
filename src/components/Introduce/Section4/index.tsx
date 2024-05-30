"use client";

import * as S from "./style";

interface Props {
  forwardRef?: any;
}

const Section4: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <S.Half />
  </S.Section>
);

export default Section4;
