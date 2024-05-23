/** @jsxImportSource @emotion/react */

"use client";

import { HTMLAttributes } from "react";
import { css } from "@emotion/react";

import { Button } from "@/components";

import * as S from "./style";

interface Props extends HTMLAttributes<HTMLDialogElement> {
  content: string;
  subContent: string;
  buttonContent: string;
  forwardedRef: React.RefObject<HTMLDialogElement>;
  onClick: () => void;
}

function CheckDialog({
  buttonContent,
  content,
  subContent,
  forwardedRef,
  onClick,
}: Props) {
  return (
    <S.Dialog ref={forwardedRef}>
      <S.Wrapper>
        <S.TextContainer>
          <S.Content>{content}</S.Content>
          <S.SubContent>{subContent}</S.SubContent>
        </S.TextContainer>
        <S.Form method="dialog">
          <Button>닫기</Button>
          <Button onClick={onClick}>{buttonContent}</Button>
        </S.Form>
      </S.Wrapper>
    </S.Dialog>
  );
}

export default CheckDialog;
