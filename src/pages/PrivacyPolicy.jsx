import React from "react";
import LegalPage from "../components/LegalPage/LegalPage";

const SECTIONS = [
  {
    id: "introduction",
    heading: "1. Introduction",
    blocks: [
      "GTV (\"we\", \"our\", \"us\") provides an IPTV streaming service that delivers live television channels, on-demand movies, shows, and international content to subscribers. This Privacy Policy explains what information we collect, how we use it, and the choices you have about your data.",
      "By subscribing to or using GTV, you agree to the practices described in this policy. We update this policy as our service and the law change, so we encourage you to review it periodically.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    blocks: [
      "We collect only the information needed to set up and manage your subscription, provide support, and improve our service. This includes:",
      [
        "Contact details: your email address and, when provided, your WhatsApp number or phone number.",
        "Account details: your plan, activation preferences, and the device types you use with our service.",
        "Billing information: payment method details are processed through secure third-party providers; we do not store full card numbers on our own servers.",
        "Usage information: non-identifying technical data such as device type, app version, and streaming performance so we can deliver a stable service.",
      ],
      { subheading: "Information you provide directly" },
      "You provide most of this information when you register, purchase a plan, contact support, or sign up for a free trial.",
      { subheading: "Information we collect automatically" },
      "When you use our apps or website, we may automatically collect technical data to keep the service running smoothly and to prevent unauthorized access.",
    ],
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    blocks: [
      "We use the information we collect to:",
      [
        "Create, manage, and activate your subscription and free trials.",
        "Process your payments securely and prevent fraud or unauthorized access.",
        "Provide customer support and respond to your questions.",
        "Send you service updates, account notices, and (with your consent) promotional offers.",
        "Improve our channel lineup, app performance, and overall experience.",
      ],
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    id: "sharing",
    heading: "4. Sharing & Disclosure",
    blocks: [
      "We only share your information with trusted partners who help us deliver the service, such as payment processors and streaming infrastructure providers. These partners use your data strictly to provide their service.",
      "We may disclose information when required by law, regulation, or a valid legal request. We also share aggregated (non-identifying) usage data to help broadcasters and partners understand viewing trends.",
    ],
  },
  {
    id: "data-security",
    heading: "5. Data Security",
    blocks: [
      "We use reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse, including encrypted connections and access controls.",
      "While we work hard to protect your data, no system is entirely risk-free. If you believe your account has been compromised, contact us immediately at support@iptv.co.",
    ],
  },
  {
    id: "retention",
    heading: "6. Data Retention",
    blocks: [
      "We keep your account information for as long as your account is active, and for a reasonable period after you cancel, so we can process returns or answer billing questions.",
      "You may request that we delete your personal information at any time by contacting support. We will honor such requests unless retention is required by law or for our legitimate business needs.",
    ],
  },
  {
    id: "cookies",
    heading: "7. Cookies & Similar Technologies",
    blocks: [
      "Our website and apps use cookies and similar technologies to remember your preferences, keep you signed in, and understand how you use our service.",
      "You can control or disable cookies through your browser or device settings. Some features of our service may not work as intended if you disable them.",
    ],
  },
  {
    id: "your-rights",
    heading: "8. Your Rights",
    blocks: [
      "You have the right to access, correct, or delete the personal information we hold about you. You may also object to certain uses of your data or ask us to restrict processing.",
      "To exercise any of these rights, email support@iptv.co with your request. We will respond within a reasonable timeframe.",
    ],
  },
  {
    id: "third-party",
    heading: "9. Third-Party Services",
    blocks: [
      "Our service may include links to third-party websites or integrations (such as payment gateways and messaging apps). When you leave our site, the privacy policy of that third party applies to your data, not ours.",
    ],
  },
  {
    id: "children",
    heading: "10. Children's Privacy",
    blocks: [
      "GTV offers family and kids content, but our services are not intended for unsupervised use by children. Parents and guardians should supervise the account and the viewing experience.",
    ],
  },
  {
    id: "changes",
    heading: "11. Changes to this Policy",
    blocks: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will update the date below. Significant changes may also be announced through our apps or by email.",
    ],
  },
  {
    id: "contact",
    heading: "12. Contact Us",
    blocks: [
      "If you have any questions or requests about this Privacy Policy, or about your personal data, please reach out to:",
      [
        "Email: support@iptv.co",
        "WhatsApp: +44 7346 521271",
      ],
    ],
  },
  ];

function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your Privacy & Safety"
      intro="Learn how GTV collects, uses, protects, and manages your personal information so you can enjoy your subscription with confidence."
      updated="Last updated: August 2026"
      sections={SECTIONS}
    />
  );
}

export default PrivacyPolicy;