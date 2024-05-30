"use client";

import * as S from "./style";

interface Props {
  forwardRef?: any;
}

const Section2: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <h1>안녕하세요</h1>
  </S.Section>
);

export default Section2;
