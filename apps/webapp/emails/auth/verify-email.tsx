import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  pixelBasedPreset,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components'

interface VerifyEmailProps {
  verificationUrl?: string;
}

export default function VerifyEmail({
  verificationUrl,
}: VerifyEmailProps) {
  const safeVerificationUrl = verificationUrl ?? 'https://torseek.org'

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                // Email-safe palette (hex) aligned to the site's warm theme.
                ts: {
                  bg: '#F5F1E6',
                  surface: '#FFFFFF',
                  text: '#3A332B',
                  muted: '#6B6255',
                  header: '#2B241D',
                  logo: '#E7DDCE',
                  link: '#2754C5',
                },
              },
            },
            fontFamily: {
              sans: ['AR One Sans', 'ui-sans-serif', 'sans-serif', 'system-ui'],
            },
          },
        }}
      >
        <Body className="bg-ts-bg text-ts-text font-sans">
          <Preview>One-click verification. No seeding required.</Preview>
          <Container className="p-5 mx-auto bg-ts-bg">
            <Section className="bg-ts-surface">
              <Section className="bg-ts-header py-5" style={{ textAlign: 'center' }}>
                <Text
                  className="text-ts-logo text-[16px] font-bold tracking-tighter m-0"
                  style={{ textAlign: 'center' }}
                >
                  torseek
                </Text>
              </Section>
              <Section className="py-[25px] px-[35px]">
                <Heading className="text-ts-text text-[20px] font-bold mb-[15px]">
                  Verify your email (speedrun any%)
                </Heading>
                <Text className="text-ts-text text-[14px] leading-[24px] mt-6 mb-[14px] mx-0">
                  Welcome to torseek — the torrent search engine that tries to
                  keep things fast, clean, and drama-free.
                  <br />
                  <br />
                  To finish setting up your account, please confirm your email
                  by clicking the button below. If you didn&apos;t request this,
                  ignore it and let this email die at 0 seeds.
                </Text>
                <Section className="flex items-center justify-center">
                  <Link
                    href={safeVerificationUrl}
                    target="_blank"
                    className="bg-ts-header text-ts-logo no-underline px-4 py-3 rounded-[10px] text-[14px] font-bold text-center"
                  >
                    Verify &amp; vibe
                  </Link>
                </Section>
                <Text className="text-ts-muted text-[12px] leading-[20px] mt-6 mb-0 mx-0">
                  If the button is being weird (classic), copy/paste this link:
                  <br />
                  <Link
                    href={safeVerificationUrl}
                    target="_blank"
                    className="text-ts-link underline break-all"
                  >
                    {safeVerificationUrl}
                  </Link>
                </Text>
              </Section>
              <Hr />
              <Section className="py-[25px] px-[35px]">
                <Text className="text-ts-muted text-[14px] m-0">
                  torseek will never email you to ask for your password or
                  request sensitive payment details. If anyone does, that&apos;s
                  a fake — don&apos;t click, don&apos;t reply, don&apos;t feed
                  the trolls.
                </Text>
              </Section>
            </Section>
            <Text className="text-ts-muted text-[12px] my-[24px] mx-0 px-5 py-0">
              This message was sent by torseek. © {new Date().getFullYear()}{' '}
              Prokits Digital, Inc. All rights reserved. torseek is a trademark
              of{' '}
              <Link
                href="https://prokits.digital"
                target="_blank"
                className="text-ts-link underline text-[14px]"
              >
                prokits.digital
              </Link>
              , Inc. View our{' '}
              <Link
                href="https://torseek.org/privacy"
                target="_blank"
                className="text-ts-link underline text-[14px]"
              >
                privacy policy
              </Link>
              .
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

VerifyEmail.PreviewProps = {
  verificationUrl: 'https://torseek.org/verify-email?token=example',
} satisfies VerifyEmailProps;
