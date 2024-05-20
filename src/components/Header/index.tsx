"use client";

import * as S from "./style";

import { Logo } from "@/assets";
import { HeaderItem } from "@/components";

const Routes = [
  {
    name: "공지사항1",
    path: "/notice",
  },
  {
    name: "공지사항2",
    path: "/notice",
  },
  {
    name: "공지사항3",
    path: "/notice",
  },
  {
    name: "공지사항4",
    path: "/notice",
  },
] as const;

const Header = () => (
  <S.Wrapper>
    <S.TitleWrapper>
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
