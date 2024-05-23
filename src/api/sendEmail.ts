import { EmailType } from "@/types/email";

export function sendEmail(data: EmailType) {
  const apiEndpoint = "/api/inquiry" as const;

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      return response.message;
    })
    .catch((err) => {
      alert(err);
    });
}
