// Section2.tsx

import * as S from "./style";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  forwardRef?: React.Ref<HTMLDivElement>;
}

const Awards = [
  {
    title: "종합 우승",
    grade: "1",
  },
  {
    title: "종합 준우승",
    grade: "2",
  },
  {
    title: "종합 3위",
    grade: "3",
  },
] as const;

const Section2: React.FC<Props> = ({ forwardRef }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const initialPositions = cards.map((card, index) => ({
      left: index * 200,
      rotation: index === 1 ? 0 : (index - 1) * 45,
      zIndex: index === 1 ? 1 : 0,
      scale: index === 1 ? 1.2 : 1,
    }));

    cards.forEach((card, index) => {
      gsap.set(card, initialPositions[index]);
    });

    const rotateCards = () => {
      const currentPositions = cards.map((card) => ({
        left: gsap.getProperty(card, "left"),
        rotation: gsap.getProperty(card, "rotation"),
        zIndex: gsap.getProperty(card, "zIndex"),
        scale: gsap.getProperty(card, "scale"),
      }));

      const newPositions = [
        currentPositions[2],
        currentPositions[0],
        currentPositions[1],
      ];

      cards.forEach((card, index) => {
        gsap.to(card, {
          left: newPositions[index].left,
          rotation: newPositions[index].rotation,
          zIndex: newPositions[index].zIndex,
          scale: newPositions[index].scale,
          duration: 0.5,
          ease: "power2.inOut",
        });
      });
    };

    const intervalId = setInterval(rotateCards, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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

          {Awards.map((award, i) => (
            <S.Content
              key={i}
              ref={(el) => {
                if (el) cardRefs.current[i] = el;
              }}
              color="mint"
            >
              <S.ContentHead color="mint">
                <S.ContentTitle>{award.title}</S.ContentTitle>
                <Image src={`/main/badminton${(i % 2) + 1}.png`} alt="" fill />
              </S.ContentHead>
              <Image
                id="medal"
                alt="medal"
                src={`/medal/medal${award.grade}.webp`}
                width={80}
                height={80}
              />
              <S.ContentDescription>첨단 미르치과대회</S.ContentDescription>
            </S.Content>
          ))}
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section2;
