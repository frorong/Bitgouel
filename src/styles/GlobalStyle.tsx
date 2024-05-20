"use client";

import { Global, css } from "@emotion/react";

import emotionReset from "emotion-reset";

export function GlobalStyle() {
  return (
    <Global
      styles={css`
        ${emotionReset}

        body, * {
          font-family: "Pretendard Variable", Pretendard, -apple-system,
            BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
            "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
          box-sizing: border-box;
        }

        body {
          background: "#ffffff";
          height: 100vh;
          height: 100dvh;
          overscroll-behavior-y: none;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          padding: 0;
          border: none;
          outline: none;
          background: inherit;
          cursor: pointer;
        }
      `}
    />
  );
}

export default GlobalStyle;
