"use client";

import * as S from "./style";

import { Section1, Section2, Section3 } from "@/components/Introduce";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const IntroducePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (containerRef.current) {
      const SECTIONS = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
      const targetContainer = containerRef.current!.offsetWidth;

      gsap.to(SECTIONS, {
        xPercent: -100 * (SECTIONS.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          end: () => "+=" + targetContainer,
          pin: true,
          scrub: 1,
          snap: 1 / (SECTIONS.length - 1),
        },
      });
    }
  }, [containerRef, sectionsRef]);

  return (
    <S.IntroduceWrapper ref={containerRef} id="container">
      <Section1 forwardRef={(el: any) => (sectionsRef.current[0] = el)} />
      <Section2 forwardRef={(el: any) => (sectionsRef.current[1] = el)} />
      <Section3 forwardRef={(el: any) => (sectionsRef.current[2] = el)} />
    </S.IntroduceWrapper>
  );
};

export default IntroducePage;
