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
} from '@react-email/components';

interface VerifyEmailProps {
  verificationUrl?: string;
}

export default function VerifyEmail({
  verificationUrl,
}: VerifyEmailProps) {
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
          <Preview>torseek Email Verification</Preview>
          <Container className="p-5 mx-auto bg-ts-bg">
            <Section className="bg-ts-surface">
              <Section className="bg-ts-header flex py-5 items-center justify-center">
                <Text className="text-ts-logo text-[16px] font-bold tracking-tighter m-0">
                  torseek
                </Text>
              </Section>
              <Section className="py-[25px] px-[35px]">
                <Heading className="text-ts-text text-[20px] font-bold mb-[15px]">
                  Verify your email address
                </Heading>
                <Text className="text-ts-text text-[14px] leading-[24px] mt-6 mb-[14px] mx-0">
                  Thanks for starting the new AWS account creation process. We
                  want to make sure it's really you. Please enter the following
                  verification code when prompted. If you don&apos;t want to
                  create an account, you can ignore this message.
                </Text>
                <Section className="flex items-center justify-center">
                  <Text className="text-ts-muted m-0 font-bold text-center text-[14px]">
                    Verification code
                  </Text>

                  <Text className="text-ts-text text-[36px] my-[10px] mx-0 font-bold text-center">
                    {verificationUrl}
                  </Text>
                  <Text className="text-ts-muted text-[14px] m-0 text-center">
                    (This code is valid for 10 minutes)
                  </Text>
                </Section>
              </Section>
              <Hr />
              <Section className="py-[25px] px-[35px]">
                <Text className="text-ts-muted text-[14px] m-0">
                  Amazon Web Services will never email you and ask you to
                  disclose or verify your password, credit card, or banking
                  account number.
                </Text>
              </Section>
            </Section>
            <Text className="text-ts-muted text-[12px] my-[24px] mx-0 px-5 py-0">
              This message was produced and distributed by Amazon Web Services,
              Inc., 410 Terry Ave. North, Seattle, WA 98109. © 2022, Amazon Web
              Services, Inc.. All rights reserved. AWS is a registered trademark
              of{' '}
              <Link
                href="https://amazon.com"
                target="_blank"
                className="text-ts-link underline text-[14px]"
              >
                Amazon.com
              </Link>
              , Inc. View our{' '}
              <Link
                href="https://amazon.com"
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
  );
}

VerifyEmail.PreviewProps = {
  verificationUrl: 'https://example.com',
} satisfies VerifyEmailProps;
