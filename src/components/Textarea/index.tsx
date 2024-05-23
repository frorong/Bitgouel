"use client";

import React, { TextareaHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isError?: boolean;
}

const Textarea: React.FC<Props> = ({ isError = false, ...rest }) => (
  <S.TextInput {...rest} isError={isError} />
);

export default Textarea;
