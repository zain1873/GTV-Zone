import React from "react";
import "./Whychooseus.css";
const STEPS = [
  {
    number: 1,
    title: "Place your order",
    description:
      "Place your order by choosing your preferred subscription period : 1, 3, 6 or 12 months.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="21" r="1.5" fill="currentColor" />
        <circle cx="18" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Get your account",
    description:
      "This process can take 5 to 15 minutes. To speed up the process, please contact us via WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" fill="currentColor" />
        <path
          d="M4 20c0-3.9 3.6-7 8-7s8 3.1 8 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Enjoy GTV service!",
    description:
      "Enjoy all channels, films, and series now. Immerse yourself in endless entertainment with our GTV service.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="2.5"
          y="4.5"
          width="19"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8.5 20.5h7M12 16.5v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <div className="why-choose-container max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="why-choose-header flex flex-col items-center">
          <span className="why-choose-eyebrow">Core Features</span>
          <h2 className="why-choose-title">Why Choose GTV ?</h2>
        </div>

        {/* Steps grid */}
        <div className="why-choose-grid grid gap-8">
          {STEPS.map((step) => (
            <article key={step.number} className="why-choose-card">
              {/* Small number badge in the corner */}
              <span className="why-choose-number">{step.number}</span>

              <div className="why-choose-icon flex items-center justify-center">
                {step.icon}
              </div>

              <h3 className="why-choose-card-title">
                {step.number}. {step.title}
              </h3>

              <p className="why-choose-card-text">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;