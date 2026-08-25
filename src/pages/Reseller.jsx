import React from "react";
import "./Reseller.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const PLANS = [
  { credits: 120, price: 259 },
  { credits: 240, price: 449 },
  { credits: 360, price: 599 },
  { credits: 600, price: 799 },
];

const FEATURES = [
  "24h Trial = 0 credit",
  "1 month : 1 credit",
  "3 month : 3 credits",
  "6 month : 6 credits",
  "12 month : 12 credits",
  "Pay as you go!",
  "Instant Activation",
  "No VPN Required",
  "24/7 Support",
];

// The biggest package is highlighted as the best value
const HIGHLIGHTED_CREDITS = 600;

function Reseller() {
  return (
    <div>
      <Navbar />
      <section className="reseller">
        <div className="reseller-container max-w-6xl mx-auto px-4">
          <div className="reseller-header flex flex-col items-center">
            <span className="reseller-eyebrow">Reseller Panel</span>
            <h2 className="reseller-title">Choose Your Credits Package</h2>
          </div>

          <div className="reseller-grid grid gap-6">
            {PLANS.map((plan) => (
              <article
                key={plan.credits}
                className={
                  plan.credits === HIGHLIGHTED_CREDITS
                    ? "reseller-card reseller-card-highlight"
                    : "reseller-card"
                }
              >
                {plan.credits === HIGHLIGHTED_CREDITS && (
                  <span className="reseller-badge">Best Value</span>
                )}

                <div className="reseller-card-top">
                  {plan.credits} credits
                </div>

                <div className="reseller-price">
                  <span className="reseller-price-currency">£</span>
                  <span className="reseller-price-amount">{plan.price}</span>
                </div>

                <ul className="reseller-features">
                  {FEATURES.map((feature) => (
                    <li key={feature} className="reseller-feature">
                      <span className="reseller-feature-icon" aria-hidden="true">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="reseller-buy-btn"
                  href={`https://wa.me/447346521271?text=${encodeURIComponent(
                    `Hi GTV! I would like to buy:\n${plan.credits} credits - $${plan.price}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buy the ${plan.credits} credits package on WhatsApp`}
                >
                  Buy Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="reseller-cta">
        <div className="reseller-cta-container max-w-6xl mx-auto px-4">
          <span className="reseller-cta-eyebrow">Become a Reseller</span>
          <h2 className="reseller-cta-title">
            Ready to Start Selling GTV?
          </h2>
          <p className="reseller-cta-text">
            Pick a credits package and start supplying premium TV to your own
            customers. Instant activation, flexible top-ups, and 24/7 support —
            let&apos;s get you set up today.
          </p>
          <a
            href="https://wa.me/447346521271"
            target="_blank"
            rel="noopener noreferrer"
            className="reseller-cta-btn"
            aria-label="Chat with GTV on WhatsApp to become a reseller"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM7.9 18.65C8.4 18.65 8.88 18.39 9.3 18.05C9.96 17.6 10.62 17.15 10.62 17.15C10.96 18.22 10.96 18.77 11.08 19.07C11.08 19.07 11.08 19.45L12.04 20.15C10.56 20.15 9.11 19.76 7.84 19C7.3 18.65 6.88 18.39 6.5 18.05C5.96 17.6 5.3 17.15 4.5 16.6C4.5 16.6 4.5 16.29 4.22 14.98C3.79 13.46 3.79 11.91 3.79 7.37C7.5 3.66 12.05 3.66 14.25 3.66 16.32 4.52C17.87 6.08 19.42 7.64 20.29 9.71 20.29 11.91C20.28 16.46 16.58 4.15 12.04 20.15Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Reseller;