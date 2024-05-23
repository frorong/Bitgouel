"use client";

import { sendEmail } from "@/api";
import { Input, Textarea, Button } from "@/components";

import * as S from "./style";

import { useEffect, useState } from "react";

const InquiryPage = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // sendEmail({
    //   name: "이승제",
    //   title: "빛고을 레슨 받고싶어요",
    //   message: "제발 받게 해주세요",
    //   contact: "01055421987",
    // });
  }, []);

  return (
    <S.Container>
      <S.Title>문의하기</S.Title>
      <Input
        placeholder="문의자의 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="회신 연락처를 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="문의 제목을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        placeholder="문의할 내용을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>제출하기</Button>
    </S.Container>
  );
};

export default InquiryPage;
