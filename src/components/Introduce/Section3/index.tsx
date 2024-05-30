"use client";

import * as S from "./style";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  forwardRef?: any;
}

const Section3: React.FC<Props> = ({ forwardRef }) => {
  gsap.registerPlugin(ScrollTrigger);
  const setItems = () => {
    gsap.to("#i1", { duration: 1, x: 350, ease: "elastic", opacity: 1 });
    gsap.to("#i2", { duration: 1, x: -350, ease: "elastic", opacity: 1 });
    gsap.to("#i3", { duration: 3, y: 670, ease: "elastic", opacity: 1 });
    gsap.to("#i4", { duration: 2, x: -480, ease: "elastic", opacity: 1 });
    gsap.to("#i5", { duration: 2, x: 480, ease: "elastic", opacity: 1 });
  };

  return <S.Section ref={forwardRef}></S.Section>;
};

export default Section3;
