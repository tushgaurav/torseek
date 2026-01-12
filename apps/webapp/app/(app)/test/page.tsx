"use client"

import { sendVerifyEmail } from "@/lib/send-emails"
import { Button } from "@/components/ui/button"

export default function TestPage() {
  return (
    <div>
      <h1>Test Page</h1>
      <Button onClick={() => {
        sendVerifyEmail({
          id: "123",
          email: "iamtushgaurav@gmail.com",
          emailVerified: false,
          name: "Tush Gaurav",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, "https://torseek.org/verify-email?token=1234567890")}}>
        Send Verify Email
      </Button>
    </div>
  )
}