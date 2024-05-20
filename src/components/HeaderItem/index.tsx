"use client";

import * as S from "./style";

interface Props {
  name: string;
  path: string;
}

const HeaderItem: React.FC<Props> = ({ name, path }) => (
  <S.Wrapper href={path}>
    <S.ItemTitle>{name}</S.ItemTitle>
  </S.Wrapper>
);

export default HeaderItem;
