"use client";

import * as S from "./style";

import Image from "next/image";

import { useTheme } from "@emotion/react";

interface Props {
  forwardRef?: any;
}

const Awards = [
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
  {
    title: "홍길동",
    grade: "",
  },
] as const;

const Section2: React.FC<Props> = ({ forwardRef }) => {
  return (
    <S.Section ref={forwardRef}>
      <S.Wrapper>
        <S.Title>빛고을 배드민턴 클럽은</S.Title>
        <S.Title>적극적으로 대회에 참여해요!</S.Title>
        <S.ContentWrapper>
          <S.DescriptionWrapper>
            <S.Description>최강 빛고을이 거둔</S.Description>
            <S.Description>역대 성적들</S.Description>
            <S.Caption>
              빛고을 클럽은 여러 대회에 출전하여 눈부신 성과를 거두며, 클럽의
              위상을 한층 더 높였습니다. 지금까지 클럽은 여러 대회에서 다음과
              같은 훌륭한 성적을 거두었으며, 빛고을의 이름을 널리 알리고
              자부심을 고취시켰습니다.
            </S.Caption>
          </S.DescriptionWrapper>
          <S.Content>
            <S.ContentHead color="mint">
              <S.ContentTitle>종합 우승</S.ContentTitle>
              <Image src="/main/badminton2.png" alt="" fill />
            </S.ContentHead>
            <Image
              id="medal"
              alt="medal"
              src="/medal/medal1.webp"
              width={80}
              height={80}
            />
            <S.ContentDescription>첨단 미르치과대회</S.ContentDescription>
          </S.Content>
          <S.Content>
            <S.ContentHead color="mint">
              <S.ContentTitle>종합 우승</S.ContentTitle>
              <Image src="/main/badminton1.png" alt="" fill />
            </S.ContentHead>
            <Image
              id="medal"
              alt="medal"
              src="/medal/medal2.webp"
              width={80}
              height={80}
            />
            <S.ContentDescription>첨단 미르치과대회</S.ContentDescription>
          </S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section2;
