"use client";

import * as S from "./style";

import { useIntersectionObserver } from "@/hooks";
import { gsap } from "gsap";

import { useEffect, useRef } from "react";

import Image from "next/image";

interface Props {
  forwardRef?: any;
}

const Section4: React.FC<Props> = ({ forwardRef }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const moveElements = (isUp: boolean) => {
    gsap.to("#cock", {
      scrollTrigger: "#cock",
      y: isUp ? 900 : 0,
      x: isUp ? -1400 : 0,
      duration: 3,
      ease: "elastic.out",
      transform: isUp ? "rotate(100deg)" : "rotate(140deg)",
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

      <S.TelWrapper>
        <S.Title>빛고을 배드민턴 클럽에 가입하려면?</S.Title>

        <S.TelText>총무님: 010-1234-5678</S.TelText>
        <S.TelText>회장님: 010-1234-5678</S.TelText>

        <S.DownloadButton href="/Introduce/rule.hwp" download>
          <S.TelText>회칙 다운로드</S.TelText>
        </S.DownloadButton>
      </S.TelWrapper>
      <S.Trigger ref={targetRef} />
      <S.CockWrapper id="cock">
        <Image src="/Introduce/Cock.svg" width={200} height={200} alt="cock" />
      </S.CockWrapper>
    </S.Section>
  );
};

export default Section4;
