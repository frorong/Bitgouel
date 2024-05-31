"use client";

import * as S from "./style";

import { useEffect, useRef } from "react";

import Image from "next/image";

import { OpenLayersMap } from "@/components";

interface Props {
  forwardRef?: any;
}

const Section4: React.FC<Props> = ({ forwardRef }) => {
  return (
    <S.Section ref={forwardRef}>
      <S.TelWrapper>
        <S.MapWrapper>
          <OpenLayersMap />
        </S.MapWrapper>
        <S.Title>찾아오시는길.</S.Title>

        <S.TelText>총무님: 010-1234-5678</S.TelText>
        <S.TelText>회장님: 010-1234-5678</S.TelText>
      </S.TelWrapper>
    </S.Section>
  );
};

export default Section4;
