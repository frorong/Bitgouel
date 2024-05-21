"use client";

import { ThemeProvider } from "@emotion/react";

import { ToastContainer } from "react-toastify";

import { ViewTransitions } from "next-view-transitions";

import { theme, GlobalStyle } from "@/styles";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <ViewTransitions>{children}</ViewTransitions>
    </ThemeProvider>
  );
};

export default Providers;
