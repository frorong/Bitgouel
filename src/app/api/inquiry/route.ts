import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { contact, name, message, title } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
      pass: process.env.NEXT_PUBLIC_GOOGLE_EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
    to: process.env.NEXT_PUBLIC_RECEIVER_EMAIL,
    subject: title,
    html: `
    <h1>${title}</h1>
    <div>${message}</div>
    <br/>
    <p>문의자: ${name}</p>
    <p>회신 연락처: ${contact}</p>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
