"use client";

import * as S from "./style";

import Image from "next/image";

interface Props {
  forwardRef?: any;
}

const Section0: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    {/* <S.ImageWrapper>
      <Image src={"/Introduce/section1.png"} alt="cover" fill />
    </S.ImageWrapper>
    <S.TitleWrapper>
      <S.Title>빛고을 배드민턴 클럽에</S.Title>
      <S.Title>오신 것을 환영해요!!</S.Title>
    </S.TitleWrapper> */}
    <S.Container>
      <S.Content>
        <S.ImageWrapper>
          <Image src="/Introduce/good1.png" fill alt="good1" />
        </S.ImageWrapper>
        <S.Title>최고의 시설</S.Title>
      </S.Content>
    </S.Container>
    <S.Container></S.Container>
    <S.Container></S.Container>
  </S.Section>
);

export default Section0;
