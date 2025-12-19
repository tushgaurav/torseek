import Plunk from "@plunk/node";
import { render } from "@react-email/components";
import VerifyEmail from "@/emails/auth/verify-email";


export async function sendVerifyEmail(verificationUrl: string) {
    const emailHtml = await render(<VerifyEmail verificationUrl={verificationUrl} />)

  const response = await fetch("https://next-api.useplunk.com/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer `,
    },
    body: JSON.stringify({
      to: "iamtushgaurav@gmail.com",
      from: "noreply@torseek.org",
      subject: "Verify your email",
      body: emailHtml,
    }),
  })
  const data = await response.json()
  console.log(data)
}