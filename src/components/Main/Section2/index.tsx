"use client";

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
    name: "제 26회 광산구청장기",
  },
  {
    title: "종합 준우승",
    grade: "2",
    name: "제 16회 첨단미르치과병원배",
  },
  {
    title: "종합 우승",
    grade: "1",
    name: "제15회 첨단미르치과병원배",
  },
] as const;

const Section2: React.FC<Props> = ({ forwardRef }) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const rotateCards = () => {
      gsap.to(cards, {
        rotationY: (index) => `+=${index === 1 ? 360 : 0}`,
        scale: (index) => (index === 1 ? 1.2 : 1),
        filter: (index) => `brightness(${index === 1 ? 100 : 60}%)`,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          const firstCard = cards.shift();
          if (firstCard) {
            cards.push(firstCard);
            gsap.set(cards, { zIndex: (index) => (index === 1 ? 1 : 0) });
          }
        },
      });
    };

    rotateCards();
    const intervalId = setInterval(rotateCards, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <S.Section ref={forwardRef}>
      <S.Wrapper>
        <S.Title>빛고을 배드민턴 클럽은</S.Title>
        <S.Title>대회에서 우수한 성적을 거두어요!</S.Title>
        <S.ContentWrapper>
          <S.DescriptionWrapper>
            <S.Description>최강 빛고을이 거둔</S.Description>
            <S.Description>최근 성적들</S.Description>
            <S.Caption>
              빛고을 클럽은 여러 대회에 출전하여 눈부신 성과를 거두며, 클럽의
              위상을 한층 더 높였습니다. 빛고을 배드민턴 클럽은 여러 대회에서
              다음과 같은 훌륭한 성적을 거두었으며, 빛고을의 이름을 널리 알리고
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
              <S.ContentDescription>{award.name}</S.ContentDescription>
            </S.Content>
          ))}
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Section>
  );
};

export default Section2;
