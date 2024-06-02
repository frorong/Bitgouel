"use client";

import * as S from "./style";

import Image from "next/image";

import { OpenLayersMap } from "@/components";

interface Props {
  forwardRef?: any;
}

const Section4: React.FC<Props> = ({ forwardRef }) => {
  return (
    <S.Section ref={forwardRef}>
      <S.TelWrapper>
        <S.Title>찾아오시는 길.</S.Title>
        <S.ImageMap>
          <S.MapWrapper>
            <OpenLayersMap />
          </S.MapWrapper>
          <S.ImageWrapper>
            <Image src="/main/outside.jpeg" alt="" fill />
          </S.ImageWrapper>
        </S.ImageMap>

        <S.GoToMap href="https://maps.app.goo.gl/r1ZY6WPgjeYQFQT69">
          -&gt; 지도 앱에서 보기
        </S.GoToMap>
        <S.Text>주소: 광주광역시 광산구 무진대로211번길 28</S.Text>
        <S.Text>빛고을국민체육센터 4층</S.Text>
      </S.TelWrapper>
    </S.Section>
  );
};

export default Section4;
