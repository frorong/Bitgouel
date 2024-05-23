"use client";

import { sendEmail } from "@/api";
import { Input, Textarea, Button, CheckDialog } from "@/components";

import * as S from "./style";

import { useEffect, useState, useRef } from "react";

const InquiryPage = () => {
  const [name, setName] = useState<string>("");

  const dialog = useRef<HTMLDialogElement>(null);

  const handleModal = {
    show: () => dialog.current?.showModal(),
    close: () => dialog.current?.close(),
  };

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
      <Button onClick={handleModal.show}>제출하기</Button>
      <CheckDialog
        content="문의 메일을 보내시겠습니까?"
        subContent="지금 보내시면 10분 동안 재전송이 불가합니다."
        buttonContent="확인"
        forwardedRef={dialog}
        onClick={() => {}}
      />
    </S.Container>
  );
};

export default InquiryPage;
