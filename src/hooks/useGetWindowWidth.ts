"use client";

import { useEffect, useState } from "react";

export default function useGetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(1920);

  let throttling = false;

  function onResize() {
    if (throttling) return;

    throttling = true;

    setTimeout(() => {
      setWindowWidth(window.innerWidth);
      throttling = false;
    }, 200);
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowWidth;
}
