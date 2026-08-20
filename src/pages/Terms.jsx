import React from "react";
import LegalPage from "../components/LegalPage/LegalPage";

const SECTIONS = [
  {
    id: "introduction",
    heading: "1. Introduction",
    blocks: [
      "Welcome to GTV. These Terms & Conditions (\"Terms\") govern your access to and use of our IPTV streaming service, website, and related features. By subscribing to, purchasing, or using GTV, you agree to be bound by these Terms.",
      "Please read these Terms carefully. If you have any questions, contact our support team before you subscribe.",
    ],
  },
  {
    id: "eligibility",
    heading: "2. Eligibility",
    blocks: [
      "You must be at least 18 years old (or of legal age in your country) to purchase a subscription. By using the service you confirm that you meet the eligibility requirements.",
    ],
  },
  {
    id: "your-account",
    heading: "3. Your Account & Responsibilities",
    blocks: [
      "To use GTV, you create a subscription account. You are responsible for keeping your account credentials confidential and for all activity that happens under your account.",
      "You agree to:",
      [
        "Provide accurate and current registration information.",
        "Not share your account credentials with others in a way that violates these Terms.",
        "Notify us promptly if you detect any unauthorized use of your account.",
      ],
    ],
  },
  {
    id: "service-description",
    heading: "4. About the Service",
    blocks: [
      "GTV provides access to live TV channels, on-demand movies and series, sports, and international content through compatible internet-connected devices.",
      "Plan availability, channel lineups, and features may vary by region and plan. We strive to offer the channels and content described, but occasionally a channel may be unavailable due to licensing or technical reasons.",
      "A stable internet connection is required. We recommend a minimum connection speed for smooth streaming, and the video quality may vary with your internet service.",
    ],
  },
  {
    id: "free-trial",
    heading: "5. Free Trial",
    blocks: [
      "Eligible customers may be offered a free trial period at no cost and/or a 24-hour trial that costs no credits for resellers. Each customer is generally limited to one free trial.",
      "The trial period is subject to availability, and we may require you to complete certain steps to qualify. At the end of the trial period, the applicable paid plan begins unless otherwise stated.",
    ],
  },
  {
    id: "billing",
    heading: "6. Billing & Payment",
    blocks: [
      "By subscribing, you agree to pay all charges associated with your chosen plan or channel package.",
      "Payment is due at the time your subscription is activated or renewed. We accept the payment methods shown at checkout (including reseller credits).",
      "You authorize us (or our payment provider) to charge the payment method on file. If a payment fails, we may suspend your access until the balance is settled.",
      "We do not store full card details on our own servers; payments are processed through secure third-party payment providers.",
      "Your subscription is personal unless you are an approved reseller distributing credits under a separate reseller agreement.",
    ],
  },
  {
    id: "renewal-cancellation",
    heading: "7. Renewal & Cancellation",
    blocks: [
      "Subscriptions renew automatically for their billing period unless you cancel before the renewal date.",
      "You can cancel your subscription at any time through the client area or by contacting support. If you cancel, access continues until the end of the paid period.",
      "No partial refunds are given for unused subscription time, unless stated under our Refund Policy.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "8. Acceptable Use",
    blocks: [
      "You may use the service for personal, non-commercial streaming within the limits of your plan. You agree not to:",
      [
        "Resell, redistribute, or rebroadcast the content or stream feeds without authorization (unless you are an approved reseller).",
        "Reverse-engineer or interfere with our apps, encryption, or security measures.",
        "Attempt to bypass geographic or plan-based restrictions.",
        "Use the service in any way that violates these Terms.",
      ],
      "We may suspend or terminate access to any account that violates these rules.",
    ],
  },
  {
    id: "intellectual-property",
    heading: "9. Intellectual Property",
    blocks: [
      "All content available through GTV, including channels, logos, text, and software, is the property of its respective owners and is licensed to us for streaming.",
      "You may not copy, record, or redistribute the content without permission.",
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "10. Limitation of Liability",
    blocks: [
      "The service is provided \"as is\", without warranties of any kind beyond the streaming service delivered.",
      "To the fullest extent permitted by law, GTV is not liable for any indirect, incidental, special, or consequential damages arising from your use of the service, including streaming interruptions or temporary outages.",
    ],
  },
  {
    id: "termination",
    heading: "11. Termination & Suspension",
    blocks: [
      "We may suspend or terminate your access at any time for violation of these Terms, fraudulent activity, or conduct that threatens the service or other users.",
      "You may terminate your subscription at any time. In all cases, obligations that arose before cancellation remain in effect.",
    ],
  },
  {
    id: "changes-to-terms",
    heading: "12. Changes to These Terms",
    blocks: [
      "We may update these Terms to reflect changes in our service, licensing, or applicable law. We will post any changes on this page and, for significant updates, inform you through our service.",
    ],
  },
  {
    id: "contact",
    heading: "13. Contact Us",
    blocks: [
      "Questions or concerns about these Terms can be sent to:",
      [
        "Email: livexatv.info@gmail.com",
        "WhatsApp: +44 7346 521271",
      ],
    ],
  },
];

function Terms() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      intro="Understand the terms under which you may subscribe to and use the GTV IPTV service, including billing, cancellation, and your responsibilities."
      updated="Last updated: August 2026"
      sections={SECTIONS}
    />
  );
}

export default Terms;