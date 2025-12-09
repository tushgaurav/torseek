import type { Metadata } from "next";
import { Page, PageTitle, Paragraph, Subtitle } from "@/components/shared/page";

export const metadata: Metadata = {
  title: "Privacy Policy | torseek",
};

export default function PrivacyPage() {
  return (
    <Page>
      <PageTitle>Privacy Policy</PageTitle>
      <h2 className="text-sm text-muted-foreground">Last updated: 30/07/2025</h2>

      <Paragraph className="mt-6">
        Welcome to torseek ("we," "us," or "our"). This Privacy Policy explains
        how we collect, use, disclose, and safeguard your information when you
        visit our website torseek.org (the "Service"). Please read this Privacy
        Policy carefully. If you do not agree with the terms of this Privacy
        Policy, please do not access the Service.
      </Paragraph>
      <Paragraph>
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy will inform you about how we look after your
        personal data when you visit our Service and tell you about your privacy
        rights and how the law protects you.
      </Paragraph>

      <Subtitle>1. Information We Collect</Subtitle>
      <Paragraph>
        We may collect information about you in a variety of ways. The
        information we may collect on the Service includes:
      </Paragraph>
      <Paragraph>
        <strong>Personal Data:</strong> If you create an account or use certain
        features of the Service, we may collect personally identifiable
        information, such as your name, email address, and any other information
        you voluntarily provide to us.
      </Paragraph>
      <Paragraph>
        <strong>Usage Data:</strong> We may automatically collect certain
        information when you access and use the Service, including your IP
        address, browser type, operating system, access times, and the pages you
        have viewed directly before and after accessing the Service.
      </Paragraph>
      <Paragraph>
        <strong>Search Data:</strong> We may collect information about the
        searches you perform on the Service, including search terms and results
        accessed, to improve our Service and provide better search results.
      </Paragraph>
      <Paragraph>
        <strong>Cookies and Tracking Technologies:</strong> We may use cookies,
        web beacons, tracking pixels, and other tracking technologies on the
        Service to help customize the Service and improve your experience. For
        more information on how we use cookies, please refer to Section 4 below.
      </Paragraph>

      <Subtitle>2. How We Use Your Information</Subtitle>
      <Paragraph>We may use information collected about you via the Service to:</Paragraph>
      <ul className="list-disc pl-6 space-y-2 mb-6 max-w-[80ch]">
        <li>
          Create and manage your account and provide you with customer support.
        </li>
        <li>
          Process your transactions and send you related information, including
          confirmations and invoices.
        </li>
        <li>
          Send you administrative information, such as updates to our terms,
          conditions, and policies.
        </li>
        <li>
          Improve and optimize the Service, including analyzing usage patterns
          and trends.
        </li>
        <li>
          Personalize your experience and deliver content and product offerings
          relevant to your interests.
        </li>
        <li>
          Monitor and analyze usage and trends to improve your experience with
          the Service.
        </li>
        <li>
          Detect, prevent, and address technical issues and fraudulent or illegal
          activity.
        </li>
        <li>
          Comply with legal obligations and enforce our Terms of Service.
        </li>
      </ul>

      <Subtitle>3. Disclosure of Your Information</Subtitle>
      <Paragraph>
        We may share information we have collected about you in certain
        situations. Your information may be disclosed as follows:
      </Paragraph>
      <Paragraph>
        <strong>By Law or to Protect Rights:</strong> If we believe the release
        of information about you is necessary to respond to legal process, to
        investigate or remedy potential violations of our policies, or to
        protect the rights, property, and safety of others, we may share your
        information as permitted or required by any applicable law, rule, or
        regulation.
      </Paragraph>
      <Paragraph>
        <strong>Third-Party Service Providers:</strong> We may share your
        information with third parties that perform services for us or on our
        behalf, including payment processing, data analysis, email delivery,
        hosting services, customer service, and marketing assistance.
      </Paragraph>
      <Paragraph>
        <strong>Business Transfers:</strong> We may share or transfer your
        information in connection with, or during negotiations of, any merger,
        sale of company assets, financing, or acquisition of all or a portion of
        our business to another company.
      </Paragraph>
      <Paragraph>
        <strong>Aggregated Data:</strong> We may share aggregated, anonymized,
        or de-identified data that cannot reasonably be used to identify you
        with third parties for various purposes, including analytics and
        research.
      </Paragraph>
      <Paragraph>
        <strong>With Your Consent:</strong> We may disclose your personal
        information for any other purpose with your consent.
      </Paragraph>

      <Subtitle>4. Cookies and Tracking Technologies</Subtitle>
      <Paragraph>
        We may use cookies, web beacons, tracking pixels, and other tracking
        technologies on the Service to help customize the Service and improve
        your experience. When you access the Service, your personal information
        is not collected through the use of tracking technology. Most browsers
        are set to accept cookies by default. You can remove or reject cookies,
        but be aware that such action could affect the availability and
        functionality of the Service.
      </Paragraph>
      <Paragraph>
        We may use the following types of cookies:
      </Paragraph>
      <ul className="list-disc pl-6 space-y-2 mb-6 max-w-[80ch]">
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the Service to function properly and cannot be disabled.
        </li>
        <li>
          <strong>Analytics Cookies:</strong> These cookies help us understand
          how visitors interact with the Service by collecting and reporting
          information anonymously.
        </li>
        <li>
          <strong>Functional Cookies:</strong> These cookies allow the Service to
          remember choices you make and provide enhanced, personalized features.
        </li>
      </ul>

      <Subtitle>5. Data Security</Subtitle>
      <Paragraph>
        We use administrative, technical, and physical security measures to help
        protect your personal information. While we have taken reasonable steps
        to secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable, and no method of data transmission can be guaranteed
        against any interception or other type of misuse.
      </Paragraph>
      <Paragraph>
        Any information disclosed online is vulnerable to interception and misuse
        by unauthorized parties. Therefore, we cannot guarantee complete security
        if you provide personal information. You are responsible for maintaining
        the secrecy of your account password and any other credentials.
      </Paragraph>

      <Subtitle>6. Third-Party Services</Subtitle>
      <Paragraph>
        The Service may contain links to third-party websites and applications
        of interest, including private torrent trackers and other services, that
        are not affiliated with us. Once you have used these links to leave the
        Service, any information you provide to these third parties is not
        covered by this Privacy Policy, and we cannot guarantee the safety and
        privacy of your information.
      </Paragraph>
      <Paragraph>
        Before visiting and providing any information to any third-party
        websites, you should inform yourself of the privacy policies and
        practices (if any) of the third party responsible for that website, and
        should take those steps necessary to, in your discretion, protect the
        privacy of your information.
      </Paragraph>

      <Subtitle>7. Your Privacy Rights</Subtitle>
      <Paragraph>
        Depending on your location, you may have certain rights regarding your
        personal information, including:
      </Paragraph>
      <ul className="list-disc pl-6 space-y-2 mb-6 max-w-[80ch]">
        <li>
          The right to access – You have the right to request copies of your
          personal data.
        </li>
        <li>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate or complete
          information you believe is incomplete.
        </li>
        <li>
          The right to erasure – You have the right to request that we erase your
          personal data, under certain conditions.
        </li>
        <li>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </li>
        <li>
          The right to object to processing – You have the right to object to our
          processing of your personal data, under certain conditions.
        </li>
        <li>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </li>
      </ul>
      <Paragraph>
        If you make a request, we have one month to respond to you. If you would
        like to exercise any of these rights, please contact us at
        torseek@tushgaurav.in.
      </Paragraph>

      <Subtitle>8. Children's Privacy</Subtitle>
      <Paragraph>
        The Service is not intended for individuals under the age of 18. We do
        not knowingly collect personal information from children under 18. If
        you are a parent or guardian and believe your child has provided us with
        personal information, please contact us immediately at
        torseek@tushgaurav.in to request deletion.
      </Paragraph>
      <Paragraph>
        If we become aware that we have collected personal information from
        anyone under the age of 18 without verification of parental consent, we
        take steps to remove that information from our servers.
      </Paragraph>

      <Subtitle>9. Data Retention</Subtitle>
      <Paragraph>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this Privacy Policy, unless a
        longer retention period is required or permitted by law. When we no
        longer need to process your personal information, we will delete or
        anonymize it.
      </Paragraph>
      <Paragraph>
        If you request account deletion, we will delete your personal information
        within a reasonable timeframe, subject to any legal obligations to retain
        certain information.
      </Paragraph>

      <Subtitle>10. Changes to This Privacy Policy</Subtitle>
      <Paragraph>
        We may update this Privacy Policy from time to time in order to reflect,
        for example, changes to our practices or for other operational, legal,
        or regulatory reasons. We will notify you of any changes by posting the
        new Privacy Policy on this page and updating the "Last Updated" date.
      </Paragraph>
      <Paragraph>
        You are advised to review this Privacy Policy periodically for any
        changes. Changes to this Privacy Policy are effective when they are
        posted on this page. Your continued use of the Service after any changes
        constitutes your acceptance of the updated Privacy Policy.
      </Paragraph>

      <Subtitle>11. Contact Us</Subtitle>
      <Paragraph>
        If you have questions or comments about this Privacy Policy, please
        contact us at:
      </Paragraph>
      <Paragraph>
        Email: torseek@tushgaurav.in
      </Paragraph>
      <Paragraph>
        By using torseek, you acknowledge that you have read, understood, and
        agree to this Privacy Policy.
      </Paragraph>
    </Page>
  );
}

