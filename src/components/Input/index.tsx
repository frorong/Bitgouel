"use client";

import React, { InputHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  isLong?: boolean;
}

const Input: React.FC<Props> = ({
  isError = false,
  isLong = false,
  ...rest
}) => <S.TextInput {...rest} isError={isError} isLong={isLong} />;

export default Input;
