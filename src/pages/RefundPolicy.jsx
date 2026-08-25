import React from "react";
import LegalPage from "../components/LegalPage/LegalPage";

const SECTIONS = [
  {
  id: "introduction",
  heading: "1. Introduction",
  blocks: [
    "This Subscription Policy explains how subscriptions to GTV work, including plan selection, billing, renewals, cancellations, and access to our services.",
    "By purchasing or subscribing to a GTV plan, you agree to the terms outlined in this policy. Please read this policy carefully before purchasing a subscription and contact us if you have any questions.",
  ],
  },
  {
    id: "free-trial",
    heading: "2. Try Before You Buy",
    blocks: [
      "We offer a free trial (and/or a 24-hour trial that costs no credits for resellers) so you can confirm the channels and service quality you care about before committing.",
      "Because you can try the service first, most refunds are handled through the free trial rather than a post-purchase refund.",
    ],
  },
  {
    id: "seller-error",
    heading: "3. Refunds for Activation or Service Errors",
    blocks: [
      "If we are unable to activate your subscription within the promised timeframe, or if you experience a persistent technical failure that prevents you from using the service, we will work to resolve the issue. If we cannot, you may be eligible for a refund.",
      [
        "We will provide a replacement or service credit when possible.",
        "If the issue cannot be resolved within a reasonable period, a refund may be issued.",
      ],
    ],
  },
  {
    id: "refund-request",
    heading: "4. How to Request a Refund",
    blocks: [
      "To request a refund, contact our support team with your account email, order details, and a description of the issue:",
      [
        "Email: livexatv.info@gmail.com",
        "WhatsApp: +44 7346 521271",
      ],
      "Once your request is verified, we will issue a refund to the original payment method or as service credits, whichever applies.",
    ],
  },
  {
    id: "processing-time",
    heading: "5. Refund Processing Time",
    blocks: [
      "Approved refunds are typically processed within 5 to 10 business days. The time for funds to appear on your statement depends on your bank or payment provider and is outside our control.",
    ],
  },
  {
    id: "non-refundable",
    heading: "6. Non-Refundable Items",
    blocks: [
      "The following are generally not eligible for a refund:",
      [
        "Used subscription time or credits that have already been consumed.",
        "Digital products, add-ons, or credits once fully used.",
        "Purchases made through unauthorized or fraudulent activity.",
        "Requests made by users who have violated our Terms & Conditions.",
      ],
    ],
  },
  {
    id: "chargebacks",
    heading: "7. Chargebacks & Disputes",
    blocks: [
      "If you believe a charge is incorrect, please contact us first so we can resolve it directly. Filing a chargeback before contacting our support team may delay resolution and, in some cases, result in account suspension.",
    ],
  },
  {
    id: "reseller-credits",
    heading: "8. Reseller Credits",
    blocks: [
      "Reseller credits that have been used to activate a trial or subscription are considered consumed and are not refundable.",
      "If a reseller provides a service credit to an end customer, that credit is managed by the reseller in accordance with our reseller agreement.",
    ],
  },
  {
    id: "changes",
    heading: "9. Changes to this Policy",
      blocks: [
      "We may update this Subscription Policy from time to time. Any changes will be posted on this page, and the 'Last updated' date will be revised accordingly.",
    ],
  },
  {
    id: "contact",
    heading: "10. Contact Us",
    blocks: [
      "If you need help with a refund or have any questions, reach out to our support team:",
      [
        "Email: livexatv.info@gmail.com",
        "WhatsApp: +44 7346 521271",
      ],
    ],
  },
];

function RefundPolicy() {
  return (
    <LegalPage
        eyebrow="Privacy Policy"
        title="Your Privacy Matters"
        intro="Learn how GTV collects, uses, stores, and protects your personal information when you use our platform and services."
        updated="Last updated: August 2026"
        sections={SECTIONS}
    />
  );
}

export default RefundPolicy;