import React from "react";
import "./Setup.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import {
  FaTv,
  FaMicrochip,
  FaFire,
  FaMobileAlt,
  FaLaptop,
  FaWhatsapp,
} from "react-icons/fa";

// Numbered setup steps shown in the main guide grid.
const STEPS = [
  {
    step: "01",
    title: "Get Your Activation Code",
    text: "Reach out on WhatsApp and pick a plan that suits you. You'll instantly receive your activation / device code and your personal playlist details.",
  },
  {
    step: "02",
    title: "Install the GTV App",
    text: "Install the GTV app on your Smart TV, Android box, Amazon Firestick, phone, or tablet using the download link we send you.",
  },
  {
    step: "03",
    title: "Enter Your Code",
    text: "Open the app and go to Settings → Activate Device. Paste your activation code and confirm — the service is then locked to your device.",
  },
  {
    step: "04",
    title: "Add Your Playlist",
    text: "Paste your personal playlist (M3U) link into the app, or pick your channels from the built-in configuration. Your live channels load within seconds.",
  },
  {
    step: "05",
    title: "Start Watching",
    text: "Open the live TV section and enjoy premium channels in stunning quality on up to 3 devices. Instant activation — no VPN required.",
  },
];

// Supported devices / platforms with a short tip for each.
const DEVICES = [
  {
    icon: <FaTv aria-hidden="true" />,
    name: "Smart TV",
    text: "Works on Samsung, LG and Android-based smart TVs with app-store or sideload install.",
  },
  {
    icon: <FaMicrochip aria-hidden="true" />,
    name: "Android Box",
    text: "Android TV boxes and IPTV players run the app directly from an APK file.",
  },
  {
    icon: <FaFire aria-hidden="true" />,
    name: "Firestick",
    text: "Amazon Fire Stick and Fire TV Cube install the GTV app from a signed APK easily.",
  },
  {
    icon: <FaMobileAlt aria-hidden="true" />,
    name: "Mobile & Tablet",
    text: "Android and iOS phones and tablets let you watch on the go — use the same code.",
  },
  {
    icon: <FaLaptop aria-hidden="true" />,
    name: "PC & Laptop",
    text: "Watch right from your browser or a desktop IPTV player using your M3U playlist.",
  },
];

// Collapsible troubleshooting questions.
const FAQS = [
  {
    q: "My activation code is not working.",
    a: "Double-check that there are no spaces or extra characters, and confirm the code was copied fully. If it still fails, contact us on WhatsApp for a quick replacement.",
  },
  {
    q: "Channels are buffering or show a black screen.",
    a: "Make sure your playlist link is complete and that your internet connection is running. Restart the app, then load your playlist again.",
  },
  {
    q: "Can I move my service to another device?",
    a: "Yes — reach out on WhatsApp and we can reset your device code so you can activate on a different device with the same plan.",
  },
];

function Setup() {
  return (
    <div>
      <Navbar />

      {/* ===== Hero ===== */}
      <section className="setup-hero">
        <div className="setup-container max-w-6xl mx-auto px-4">
          <span className="setup-eyebrow">Get Started</span>
          <h1 className="setup-title">
            How to Set Up <span className="setup-title-accent">GTV</span>
          </h1>
          <p className="setup-subtitle">
            Setting up your premium IPTV service takes less than five minutes.
            Follow the simple steps below to start watching in no time.
          </p>
        </div>
      </section>

      {/* ===== Step-by-step guide ===== */}
      <section className="setup-steps">
        <div className="setup-container max-w-6xl mx-auto px-4">
          <div className="setup-header flex flex-col items-center">
            <span className="setup-eyebrow">Quick Start Guide</span>
            <h2 className="setup-heading">Setup in 5 Simple Steps</h2>
          </div>

          <div className="setup-steps-grid grid gap-6">
            {STEPS.map((item) => (
              <article key={item.step} className="setup-step-card">
                <span className="setup-step-number">{item.step}</span>
                <h3 className="setup-step-title">{item.title}</h3>
                <p className="setup-step-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Supported devices ===== */}
      <section className="setup-devices">
        <div className="setup-container max-w-6xl mx-auto px-4">
          <div className="setup-header flex flex-col items-center">
            <span className="setup-eyebrow">Works Everywhere</span>
            <h2 className="setup-heading">Supported Devices</h2>
            <p className="setup-header-text">
              Install the app on any of the devices below and watch wherever
              you are with a single activation code.
            </p>
          </div>

          <div className="setup-devices-grid grid gap-6">
            {DEVICES.map((device) => (
              <article key={device.name} className="setup-device-card">
                <span className="setup-device-icon" role="img" aria-hidden="true">
                  {device.icon}
                </span>
                <h3 className="setup-device-name">{device.name}</h3>
                <p className="setup-device-text">{device.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Troubleshooting / FAQ ===== */}
      <section className="setup-faq">
        <div className="setup-container max-w-6xl mx-auto px-4">
          <div className="setup-header flex flex-col items-center">
            <span className="setup-eyebrow">Need a Hand?</span>
            <h2 className="setup-heading">Troubleshooting</h2>
          </div>

          <div className="setup-faq-list">
            {FAQS.map((faq) => (
              <div key={faq.q} className="setup-faq-item">
                <h3 className="setup-faq-question">{faq.q}</h3>
                <p className="setup-faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA band ===== */}
      <section className="setup-cta">
        <div className="setup-cta-container max-w-6xl mx-auto px-4">
          <span className="setup-cta-eyebrow">Still Stuck?</span>
          <h2 className="setup-cta-title">We're Here to Help 24/7</h2>
          <p className="setup-cta-text">
            Got a question about your activation, playlist, or device? Message
            us on WhatsApp and our support team will get you sorted fast.
          </p>
          <a
            href="https://wa.me/447346521271"
            target="_blank"
            rel="noopener noreferrer"
            className="setup-cta-btn"
            aria-label="Chat with GTV support on WhatsApp"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Setup;