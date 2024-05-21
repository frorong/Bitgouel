"use client";

import { sendEmail } from "@/api";

import * as S from "./style";
import { useEffect } from "react";

const InquiryPage = () => {
  useEffect(() => {
    sendEmail({
      name: "이승제",
      title: "빛고을 레슨 받고싶어요",
      message: "제발 받게 해주세요",
      contact: "01055421987",
    });
  }, []);

  return <S.CardContainer></S.CardContainer>;
};

export default InquiryPage;
