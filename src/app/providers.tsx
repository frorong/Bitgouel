"use client";

import { ThemeProvider } from "@emotion/react";

import { ViewTransitions } from "next-view-transitions";

import { theme, GlobalStyle } from "@/styles";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ViewTransitions>{children}</ViewTransitions>
    </ThemeProvider>
  );
};

export default Providers;
