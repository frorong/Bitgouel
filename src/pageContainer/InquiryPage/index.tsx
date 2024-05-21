"use client";

import { sendEmail } from "@/api";

import * as S from "./style";
import { useEffect } from "react";

const InquiryPage = () => {
  useEffect(() => {
    sendEmail({ from: "teset", title: "teset", message: "medsfa" });
  }, []);

  return <S.CardContainer></S.CardContainer>;
};

export default InquiryPage;
