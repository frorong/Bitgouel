"use client";

import { HTMLAttributes } from "react";
import * as S from "./style";

interface Props extends HTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => <S.TextInput {...props} />;

export default Input;
