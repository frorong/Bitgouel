"use client";

import React, { ButtonHTMLAttributes } from "react";
import * as S from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isError?: boolean;
  isLong?: boolean;
}

const Button: React.FC<Props> = ({
  isError = false,
  isLong = false,
  ...rest
}) => <S.ButtonElement {...rest} />;

export default Button;
