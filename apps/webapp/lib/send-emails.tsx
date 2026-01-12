"use server"

import { render } from "@react-email/components";
import VerifyEmail from "@/emails/auth/verify-email";
import { User } from "better-auth";

export async function sendVerifyEmail(user: User, verificationUrl: string) {
    const emailHtml = await render(<VerifyEmail verificationUrl={verificationUrl} />)

    console.log({user, verificationUrl})

  const response = await fetch("https://next-api.useplunk.com/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.PLUNK_API_KEY}`,
    },
    body: JSON.stringify({
      to: user.email,
      from: "noreply@torseek.org",
      subject: "Verify your email (no seeding required)",
      body: emailHtml,
    }),
  })
  const data = await response.json()
  console.log(data)
}