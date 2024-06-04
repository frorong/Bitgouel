import { IntroducePage } from "@/pageContainer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 | Bitguoel",
  description: "빛고을배드민턴클럽의 소개 페이지입니다.",
};

export default async function Introduce() {
  return <IntroducePage />;
}
