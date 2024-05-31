"use client";

import * as S from "./style";
import { Video } from "@/components";

interface Props {
  forwardRef?: any;
}

const Section3: React.FC<Props> = ({ forwardRef }) => {
  return (
    <S.Section ref={forwardRef}>
      <S.Half />
      <S.TitleWrapper>
        <S.Title>" 최고의 실력과 조직력 "</S.Title>

        <S.DescriptionWrapper>
          <S.Description>
            빛고을 배드민턴 클럽은 조직력을 상당히 중요히 생각합니다.
          </S.Description>
          <S.Description>
            끈끈한 조직력에서 최고의 실력과 인성을 가진 선수들이 탄생하죠.
          </S.Description>
          <S.Caption>
            빛고을 배드민턴 클럽은 조직력을 핵심으로 삼습니다. 체계적인 운영으로
            우수한 선수들을 발굴하고, 우수한 실력과 인성을 함께 가르칩니다.
            공정하고 투명한 운영으로 모든 선수들에게 기회를 제공하며, 함께
            나아가는 공동체로서의 정신을 강조합니다.
          </S.Caption>
        </S.DescriptionWrapper>
      </S.TitleWrapper>

      <S.VideoWrapper>
        <Video source="/video/section1.mp4" />
      </S.VideoWrapper>

      <S.MindWrapper>
        <S.MindTitle>빛고을 철학</S.MindTitle>
        <S.MidWrapper>
          <S.Mid id="mid" />
        </S.MidWrapper>
        <S.MidDes>가족같은 분위기와 협력으로 일상에 가치를 더한다.</S.MidDes>
      </S.MindWrapper>
    </S.Section>
  );
};

export default Section3;
