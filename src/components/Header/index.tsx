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
    name: "공지사항",
    path: "/notice",
  },
  {
    name: "공지사항",
    path: "/notice",
  },
  {
    name: "공지사항",
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
        <>
          <HeaderItem key={index} name={route.name} path={route.path} />
          {index !== Routes.length - 1 && <S.ItemDivider />}
        </>
      ))}
    </S.ItemList>
  </S.Wrapper>
);

export default Header;
