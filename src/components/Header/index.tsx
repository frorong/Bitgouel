"use client";

import * as S from "./style";

import { Logo } from "@/assets";
import { HeaderItem } from "@/components";

const Routes = [
  {
    name: "공지사항",
    path: "/notice",
  },
  {
    name: "행사갤러리",
    path: "/gallery",
  },
  {
    name: "임시헤더2",
    path: "/notice",
  },
  {
    name: "문의하기",
    path: "/inquiry",
  },
] as const;

const Header = () => (
  <S.Wrapper>
    <S.TitleWrapper href="/">
      <Logo />
      <S.Title>빛고을배드민턴클럽</S.Title>
    </S.TitleWrapper>

    <S.ItemList>
      {Routes.map((route, index) => (
        <S.ItemWrapper key={route.name}>
          <HeaderItem name={route.name} path={route.path} />
          {index !== Routes.length - 1 && <S.ItemDivider />}
        </S.ItemWrapper>
      ))}
    </S.ItemList>
  </S.Wrapper>
);

export default Header;
