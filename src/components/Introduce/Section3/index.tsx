"use client";

import { useEffect, useRef } from "react";

import * as S from "./style";
import { gsap } from "gsap";
import { useIntersectionObserver } from "@/hooks";

interface Props {
  forwardRef?: any;
}

const Section3: React.FC<Props> = ({ forwardRef }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const moveElements = (isUp: boolean) => {
    gsap.to("#content1", {
      scrollTrigger: "#content1",
      y: isUp ? -400 : 0,
      duration: 4,
    });

    gsap.to("#content2", {
      scrollTrigger: "#content2",
      y: isUp ? -300 : 0,
      duration: 4,
    });

    gsap.to("#content3", {
      scrollTrigger: "#content3",
      y: isUp ? -200 : 0,
      duration: 4,
    });
  };

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        moveElements(true);
      } else {
        moveElements(false);
      }
    });
  };

  const { observe, unobserve } = useIntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  useEffect(() => {
    const target = targetRef.current;
    if (target) {
      observe(target);
    }

    return () => {
      if (target) {
        unobserve(target);
      }
    };
  }, [observe, unobserve]);

  return (
    <S.Section ref={forwardRef}>
      <S.Half />
      <S.TitleWrapper>
        <S.Title>빛고을 배드민턴 클럽은 이런 가치를 추구해요!</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper ref={targetRef}>
        <S.Content id="content1">
          <S.ContentHead color="rgb(253, 149, 149)">
            <S.ContentTitle>함께 어울리는 분위기</S.ContentTitle>
          </S.ContentHead>
          <S.ContentDescription>
            운동와서 게임못하고 있는 회원이 있으면 같이 어울려서 게임할수 있도록
            주위에서 같이 이끌어주시고 소외되는 부분이 없도록 협조부탁드립니다.
          </S.ContentDescription>
        </S.Content>
        <S.Content id="content2">
          <S.ContentHead color="rgb(251, 172, 172)">
            <S.ContentTitle>회원간에 인사잘하기</S.ContentTitle>
          </S.ContentHead>
          <S.ContentDescription>
            인사는 인간관계의 시작이자 기본입니다. 밝은 인사를 통해 긍정적인
            이미지를 쌓아갈 수 있고 상호 관계도 더욱 돈독해질 수 있습니다.
          </S.ContentDescription>
        </S.Content>
        <S.Content id="content3">
          <S.ContentHead color="rgb(250, 208, 208)">
            <S.ContentTitle>클럽 회원 우대</S.ContentTitle>
          </S.ContentHead>
          <S.ContentDescription>
            외부인 방문시 클럽회원이 많은경우 외부인은 가급적 4.5.6 코트에서
            게임하도록 유도 부탁 드립니다.
          </S.ContentDescription>
        </S.Content>
      </S.ContentWrapper>
    </S.Section>
  );
};

export default Section3;
