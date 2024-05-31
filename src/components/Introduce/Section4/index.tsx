"use client";

import * as S from "./style";

interface Props {
  forwardRef?: any;
}

const Section4: React.FC<Props> = ({ forwardRef }) => (
  <S.Section ref={forwardRef}>
    <S.Half />

    <S.TelWrapper>
      <S.Title>빛고을 배드민턴 클럽에 가입하려면?</S.Title>

      <S.TelContent>
        <S.TelText>총무님: 010-1234-5678</S.TelText>
      </S.TelContent>
      <S.TelContent></S.TelContent>
      <S.TelText>회장님: 010-1234-5678</S.TelText>
    </S.TelWrapper>
    <a href="/Introduce/rule.hwp" download></a>
  </S.Section>
);

export default Section4;
