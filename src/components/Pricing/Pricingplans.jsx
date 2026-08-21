import React, { useState } from "react";
import "./Pricingplans.css";

// -----------------------------
// Static data for the pricing table
// (Only price + connection count change between tiers, features stay same)
// -----------------------------
const CONNECTION_TABS = [1, 2, 3];

const PLANS_BY_CONNECTION = {
  1: [
    { months: 1, price: 12 },
    { months: 3, price: 17 },
    { months: 6, price: 25 },
    { months: 12, price: 40 },
  ],
  2: [
    { months: 1, price: 17 },
    { months: 3, price: 26 },
    { months: 6, price: 39 },
    { months: 12, price: 65 },
  ],
  3: [
    { months: 1, price: 30 },
    { months: 3, price: 32 },
    { months: 6, price: 42 },
    { months: 12, price: 80 },
  ],
};

// The 12 Month plan is highlighted as the best value
const HIGHLIGHTED_MONTHS = 12;

// Builds the pre-filled WhatsApp message for the exact selected plan.
// Uses the real plan details (connections, duration, price) so the message
// always reflects what the user picked.
function buildWhatsAppMessage(plan, connectionCount) {
  const connectionLabel = `${connectionCount} Connection${connectionCount > 1 ? "s" : ""}`;
  const monthsLabel = `${plan.months} Month${plan.months > 1 ? "s" : ""}`;

  return [
    "Hi GTV,",
    "",
    "I'd like to purchase the following plan:",
    "",
    `   • Plan: ${monthsLabel} – ${connectionLabel}`,
    `   • Duration: ${monthsLabel}`,
    `   • Price: £${plan.price}`,
    "",
    "Please confirm availability and guide me through the payment. Thank you!",
  ].join("\n");
}

function PricingPlans() {
  // Track which connections tab is currently active
  const [activeConnection, setActiveConnection] = useState(1);

  const activePlans = PLANS_BY_CONNECTION[activeConnection];

  return (
    <section className="pricing">
      <div className="pricing-container max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="pricing-header flex flex-col items-center">
          <span className="pricing-eyebrow">Choose Your Plan</span>
          <h2 className="pricing-title">Simple, Flexible Pricing</h2>
          <p className="pricing-subtitle">
            Pick how many connections you need, then choose the plan length that works for you.
          </p>
        </div>

        {/* Connections tabs */}
        <div
          className="pricing-tabs flex flex-wrap justify-center items-center"
          role="tablist"
          aria-label="Number of connections"
        >
          {CONNECTION_TABS.map((count) => (
            <button
              key={count}
              type="button"
              role="tab"
              aria-selected={activeConnection === count}
              className={
                activeConnection === count ? "pricing-tab pricing-tab-active" : "pricing-tab"
              }
              onClick={() => setActiveConnection(count)}
            >
              {count} Connection{count > 1 ? "s" : ""}
            </button>
          ))}
        </div>

        {/* Plan cards */}
        <div className="pricing-grid grid gap-6">
          {activePlans.map((plan) => (
            <article
              key={plan.months}
              className={
                plan.months === HIGHLIGHTED_MONTHS
                  ? "pricing-card pricing-card-highlight"
                  : "pricing-card"
              }
            >
              {plan.months === HIGHLIGHTED_MONTHS && (
                <span className="pricing-badge">Best Value</span>
              )}

              <header className="pricing-card-header">
                <h3 className="pricing-plan-name">
                  {plan.months} Month{plan.months > 1 ? "s" : ""}
                </h3>
                <p className="pricing-plan-connections">
                  {activeConnection} Connection{activeConnection > 1 ? "s" : ""}
                </p>
              </header>

              <div className="pricing-price">
                <span className="pricing-price-currency">£</span>
                <span className="pricing-price-amount">{plan.price}</span>
              </div>

              <a
                className="pricing-buy-btn"
                href={`https://wa.me/447346521271?text=${encodeURIComponent(
                  buildWhatsAppMessage(plan, activeConnection)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buy the ${activeConnection} connection ${plan.months} month plan on WhatsApp`}
              >
                Buy Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;