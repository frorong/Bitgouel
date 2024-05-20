"use client";

import * as S from "./style";

import { useEffect, useState } from "react";

const Banner = () => {
  const [imageList, setImageList] = useState<JSX.Element[]>([]);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const newImageList = new Array(3)
      .fill(0)
      .map((_, index) => (
        <S.FadeInImage
          key={index}
          src={`/banner/${index + 1}.png`}
          alt="배너이미지"
          fill
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

  return <S.Wrapper>{imageList[current]}</S.Wrapper>;
};

export default Banner;
