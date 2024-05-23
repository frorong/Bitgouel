"use client";

import { sendEmail } from "@/api";
import { Input, Textarea, Button, CheckDialog } from "@/components";
import { isExistCookie } from "@/lib";

import { toast } from "react-toastify";

import * as S from "./style";

import { useEffect, useState, useRef } from "react";

const InquiryPage = () => {
  const [name, setName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [contact, setContact] = useState<string>("");

  const dialog = useRef<HTMLDialogElement>(null);

  const handleModal = {
    show: () => dialog.current?.showModal(),
    close: () => dialog.current?.close(),
  };

  const handleSubmitDialog = () => {
    if (
      name.length === 1 ||
      contact.length < 5 ||
      title.length < 3 ||
      message.length < 6
    ) {
      toast.error("모든 필드를 올바르게 입력해주세요.");
      return;
    }
    sendEmail({
      name: name,
      title: title,
      message: message,
      contact: contact,
    });
  };

  return (
    <S.Container>
      <S.Title>문의하기</S.Title>
      <Input
        placeholder="문의자의 이름을 입력하세요."
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={5}
        isError={name.length === 1}
      />
      <Input
        placeholder="회신 연락처를 입력하세요."
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        maxLength={17}
        isError={contact.length < 5}
      />
      <Input
        placeholder="문의 제목을 입력하세요."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={30}
        isError={title.length < 3}
      />
      <Textarea
        placeholder="문의할 내용을 입력하세요."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        maxLength={2000}
        isError={message.length < 6}
      />
      <Button onClick={handleModal.show}>제출하기</Button>
      <CheckDialog
        content="문의 메일을 보내시겠습니까?"
        subContent="지금 보내시면 10분 동안 재전송이 불가합니다."
        buttonContent="확인"
        forwardedRef={dialog}
        onClick={handleSubmitDialog}
      />
    </S.Container>
  );
};

export default InquiryPage;
