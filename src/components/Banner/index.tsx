"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";

const text = `빛고을에서는 "A"조도 될 수 있어!` as const;

const IMAGE_LENGTH = 4 as const;

const Banner: React.FC = () => {
  const [imageList, setImageList] = useState<JSX.Element[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const newImageList = new Array(IMAGE_LENGTH)
      .fill(0)
      .map((_, index) => (
        <S.FadeInImage
          key={index}
          src={`/banner/${index + 1}.png`}
          alt="배너이미지"
        />
      ));
    setImageList(newImageList);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newImageList.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.BannerTitleWrapper>
        {text.split("").map((char, index) => (
          <S.AnimatedChar
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {char}
          </S.AnimatedChar>
        ))}
      </S.BannerTitleWrapper>
      <S.ImageWrapper>{imageList[current]}</S.ImageWrapper>
    </S.Wrapper>
  );
};

export default Banner;
