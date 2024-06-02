"use client";

import * as S from "./style";

import { Logo } from "@/assets";
import { HeaderItem } from "@/components";

import { useGetWindowWidth } from "@/hooks";

const Routes = [
  {
    name: "클럽소개",
    path: "/introduce",
  },
  {
    name: "공지사항",
    path: "/notice",
  },
  {
    name: "행사갤러리",
    path: "/gallery",
  },
  {
    name: "문의하기",
    path: "/inquiry",
  },
] as const;

const TABLET_WIDTH = 880 as const;

const Header = () => {
  const width = useGetWindowWidth();

  const isTabletSize = width <= TABLET_WIDTH;

  return (
    <S.Wrapper>
      <S.TitleWrapper href="/">
        <Logo />
        <S.Title>빛고을배드민턴클럽</S.Title>
      </S.TitleWrapper>

      <S.ItemList>
        {Routes.map((route, index) => (
          <S.ItemWrapper key={route.name}>
            <HeaderItem
              name={isTabletSize ? route.name.slice(0, 2) : route.name}
              path={route.path}
            />
            {index !== Routes.length - 1 && <S.ItemDivider />}
          </S.ItemWrapper>
        ))}
      </S.ItemList>
    </S.Wrapper>
  );
};

export default Header;
