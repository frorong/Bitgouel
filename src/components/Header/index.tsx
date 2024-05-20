"use client";

import * as S from "./style";

import { Logo } from "@/assets";

const Header = () => (
  <S.Wrapper>
    <S.TitleWrapper>
      <Logo />
      <S.Title>빛고을배드민턴클럽</S.Title>
    </S.TitleWrapper>
  </S.Wrapper>
);

export default Header;
