import { cookies } from "next/headers";

import { InquiryPage } from "@/pageContainer";
import { redirect } from "next/navigation";

export default async function Home() {
  const isMailed = cookies().get("isMailed")?.value;

  if (isMailed) return redirect("/");

  return <InquiryPage />;
}
