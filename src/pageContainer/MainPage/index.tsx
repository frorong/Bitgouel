"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

import * as S from "./style";

import { Section1, Section2, Section3, Section4 } from "@/components/Main";

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (containerRef.current) {
      const SECTIONS = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
      const totalHeight = SECTIONS.length * containerRef.current.offsetHeight;

      gsap.to(SECTIONS, {
        yPercent: -100 * (SECTIONS.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          end: () => "+=" + totalHeight,
          pin: true,
          scrub: 1,
          snap: 1 / (SECTIONS.length - 1),
        },
      });
    }
  }, [containerRef, sectionsRef]);

  return (
    <S.Wrapper ref={containerRef} id="container">
      <Section1 forwardRef={(el: any) => (sectionsRef.current[0] = el)} />
      <Section2 forwardRef={(el: any) => (sectionsRef.current[1] = el)} />
      <Section3 forwardRef={(el: any) => (sectionsRef.current[2] = el)} />
      <Section4 forwardRef={(el: any) => (sectionsRef.current[3] = el)} />
    </S.Wrapper>
  );
};

export default MainPage;

// const MainPage = () => <Banner />;
