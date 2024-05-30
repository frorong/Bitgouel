"use client";

import * as S from "./style";

import Image from "next/image";

import { useTheme } from "@emotion/react";

interface Props {
  forwardRef?: any;
}

const Section2: React.FC<Props> = ({ forwardRef }) => {
  const theme = useTheme();

  return (
    <S.Section ref={forwardRef}>
      <S.TitleWrapper>
        <S.Title>빛고을 배드민턴 클럽은</S.Title>
        <S.Title>이런 활동을 해요!</S.Title>
      </S.TitleWrapper>

      <S.ContentWrapper>
        <S.Content color="rgb(210, 210, 0)">
          <S.ContentImageWrapper>
            <Image src="/Introduce/section2-1.png" alt="content" fill />
          </S.ContentImageWrapper>
          <S.ContentText>월례회를 통해 친목을 다져요</S.ContentText>
        </S.Content>
        <S.Content color={theme.color.primary}>
          <S.ContentImageWrapper>
            <Image src="/Introduce/section2-2.png" alt="content" fill />
          </S.ContentImageWrapper>
          <S.ContentText>각종 대회를 휩쓸어요</S.ContentText>
        </S.Content>
        <S.Content color="rgb(0, 99, 180)">
          <S.ContentImageWrapper>
            <Image src="/Introduce/section2-3.png" alt="content" fill />
          </S.ContentImageWrapper>
          <S.ContentText>레슨을 받아 실력을 키워요</S.ContentText>
        </S.Content>
      </S.ContentWrapper>
    </S.Section>
  );
};

export default Section2;
