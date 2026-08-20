import React, { useState } from "react";
import "./Faqsection.css";


const FAQS = [
  {
    question: "What is GTV?",
    answer:
      "GTV is a premium live streaming subscription that gives you access to over 45,000 channels, movies and series in 4K, FHD and HD quality, all delivered over the internet to your favorite devices.",
  },
  {
    question: "What do I get with an GTV subscription?",
    answer:
      "You get full access to all live TV channels, VOD movies and series, PPV and premium sports events, a TV guide (EPG), and our VIP premium application - all in one subscription.",
  },
  {
    question: "How long does it take to activate my GTV account?",
    answer:
      "Activation is usually instant to 15 minutes after your order is confirmed. If it's taking longer than expected, reach out to us on WhatsApp and we'll speed things up.",
  },
  {
    question: "Can I test the service before subscribing?",
    answer:
      "Yes! We offer a free 24 hour trial so you can test channel quality, stability and device compatibility before choosing a plan.",
  },
  {
    question: "What devices are compatible with GTV?",
    answer:
      "GTV works on Smart TVs, Android and iOS devices, Firestick, MAG boxes, Android boxes, PC/Mac, and most devices that support GTV player apps.",
  },
  {
    question: "Will the GTV service buffer or freeze?",
    answer:
      "Our servers are optimized for 99.9% uptime and smooth streaming. As long as you have a stable internet connection, you shouldn't experience buffering or freezing.",
  },
  {
    question: "Do you offer support and a money-back guarantee?",
    answer:
      "Yes, we offer 24/7 customer support and a 30-day money-back guarantee on all subscription plans, so you can subscribe with confidence.",
  },
];

function FaqSection() {
  // Keeps track of which question is currently open (null = all closed)
  const [openIndex, setOpenIndex] = useState(0);

  // Opens a question if it's closed, or closes it if it's already open
  function toggleQuestion(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="faq-section">
      <div className="faq-container max-w-6xl mx-auto px-4">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-content flex flex-wrap items-start">
          {/* Left side - image */}
          <div className="faq-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1528429421263-b742bf08e211?fm=jpg&q=80&w=1200&auto=format&fit=crop"
              alt="Friends enjoying a live sports match on TV"
              className="faq-image"
            />
          </div>

          {/* Right side - accordion */}
          <div className="faq-accordion flex flex-col">
            {FAQS.map((faq, index) => (
              <div key={faq.question} className="faq-item">
                <button
                  type="button"
                  className="faq-question flex items-center gap-3 w-full"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="faq-icon">
                    {openIndex === index ? "−" : "+"}
                  </span>
                  {faq.question}
                </button>

                {openIndex === index && (
                  <p className="faq-answer">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;