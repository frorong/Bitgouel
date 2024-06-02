/** @jsxImportSource @emotion/react */

"use client";

import { css } from "@emotion/react";

import * as S from "./style";

import Image from "next/image";

interface Props {
  forwardRef?: any;
}

const Section0: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <S.Container
      css={css`
        background: linear-gradient(to bottom, white, #f1f8ff);
      `}
    >
      <S.Content>
        <S.ImageWrapper>
          <Image src="/Introduce/good1.png" fill alt="good1" />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>최고의 시설.</S.Title>
          <S.Description>
            빛고을국민체육센터 4층에 위치한 빛고을 배드민턴 클럽은 최고의 시설을
            자랑합니다.
          </S.Description>
          <S.Description>
            총 6개의 코트가 구비되어있습니다. 빛고을 배드민턴 클럽의 회원들은
            녹색 고무로 된 코트에서 낮은 부상 위험으로 게임을 즐길 수 있습니다.
          </S.Description>
          <S.Description>
            추가요금 없이 이용할 수 있는 샤워실이 존재합니다. 땀흘리며 게임을 한
            이후 개운한 몸과 마음으로 귀가할 수 있습니다.
          </S.Description>
        </S.TextWrapper>
      </S.Content>
    </S.Container>
    <S.Container
      css={css`
        background: linear-gradient(to bottom, white, #f1fff5);
      `}
    >
      <S.Content>
        <S.ImageWrapper>
          <Image src="/Introduce/good2.png" fill alt="good2" />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>역사와 회원.</S.Title>
          <S.Description>
            빛고을 배드민턴 클럽은 역사적으로 깊은 전통과 뛰어난 다수의 회원들이
            존재합니다.
          </S.Description>
          <S.Description>
            20년이 넘는 역사가 있는 빛고을 배드민턴 클럽은 엄청난 역량의
            임원들의 의해 운영되었습니다. 그만큼 체계적인 체제가 갖춰져있고,
            회원들의 편의를 위해 힘씁니다.
          </S.Description>
          <S.Description>
            100명이 넘는 회원들과 함께 배드민턴을 즐기며 실력을 향상시킬 수
            있습니다. 다양한 급수의 회원들이 있어 편하게 게임을 즐길 수
            있습니다.
          </S.Description>
        </S.TextWrapper>
      </S.Content>
    </S.Container>
    <S.Container
      css={css`
        background: linear-gradient(to bottom, white, #f1f8f9);
      `}
    >
      <S.Content>
        <S.ImageWrapper>
          <Image src="/Introduce/good3.png" fill alt="good3" />
        </S.ImageWrapper>
        <S.TextWrapper>
          <S.Title>우수한 성적.</S.Title>
          <S.Description>
            빛고을 배드민턴 클럽은 매 대회 우수한 성적을 거두었습니다.
          </S.Description>
          <S.Description>
            깊은 역사와 우수한 회원들이 존재하는 만큼 대회에서도 우수한 성적을
            기록합니다.
          </S.Description>
          <S.Description>
            빛고을 배드민턴 클럽에 가입하여 팀으로 거두는 승리의 기쁜 성취를
            느껴보세요.
          </S.Description>
        </S.TextWrapper>
      </S.Content>
    </S.Container>
  </S.Section>
);

export default Section0;
