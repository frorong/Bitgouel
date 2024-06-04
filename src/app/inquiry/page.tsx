import { InquiryPage } from "@/pageContainer";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의 | Bitguoel",
  description: "빛고을배드민턴클럽의 문의하기 페이지입니다.",
};

export default async function Inquiry() {
  const isMailed = cookies().get("isMailed")?.value;

  if (isMailed) return redirect("/");

  return <InquiryPage />;
}
