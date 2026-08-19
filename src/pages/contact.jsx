import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const CONTACT_INFO = [
  {
    icon: <FaEnvelope aria-hidden="true" />,
    label: "Email Us",
    value: "support@8kiptv.co",
    href: "mailto:support@8kiptv.co",
  },
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    label: "Call Us",
    value: "+1 (210) 725-7388",
    href: "tel:+12107257388",
  },
  {
    icon: <FaWhatsapp aria-hidden="true" />,
    label: "WhatsApp",
    value: "+1 (210) 725-7388",
    href: "https://wa.me/12107257388",
  },
  {
    icon: <FaClock aria-hidden="true" />,
    label: "Support Hours",
    value: "24/7 — 365 days",
    href: "mailto:support@8kiptv.co",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      {/* ===== Reusable Navbar ===== */}
      <Navbar />

      {/* ===== Hero header ===== */}
      <section className="contact-hero">
        <div className="contact-hero-glow" aria-hidden="true" />
        <div className="contact-container contact-hero-inner">
          <span className="contact-eyebrow">Contact Us</span>
          <h1 className="contact-title">We're Here to Help</h1>
          <p className="contact-subtitle">
            Have a question about a plan, installation, or your account? Reach
            out to our support team — we typically reply within a few minutes.
          </p>
        </div>
      </section>
{/* ===== Contact info cards ===== */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-cards">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-card"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={`${item.label}: ${item.value}`}
              >
                <span className="contact-card-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-value">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

{/* ===== Form + details ===== */}
      <section className="contact-main">
        <div className="contact-container contact-main-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form-title">Send us a message</h2>
            <p className="contact-form-intro">
              Fill out the form below and a member of our team will get back to
              you shortly.
            </p>

            {submitted ? (
              <div className="contact-success" role="status">
                <FaCheckCircle className="contact-success-icon" aria-hidden="true" />
                <h3 className="contact-success-title">Message sent!</h3>
                <p className="contact-success-text">
                  Thank you for reaching out. We'll get back to you as soon as
                  possible. For instant help, message us on WhatsApp.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-field-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className="contact-input"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="contact-input"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject" className="contact-label">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="contact-input"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="contact-input contact-textarea"
                    placeholder="Write your message here..."
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="contact-submit-btn">
                  <FaPaperPlane className="contact-submit-icon" aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Side details */}
          <aside className="contact-side">
            <div className="contact-side-card">
              <h3 className="contact-side-title">Prefer instant chat?</h3>
              <p className="contact-side-text">
                Get the fastest response from our team directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/12107257388"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-side-btn contact-side-btn-whatsapp"
              >
                <FaWhatsapp aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-side-card">
              <h3 className="contact-side-title">Business hours</h3>
              <ul className="contact-hours">
                <li>
                  <span>Monday – Friday</span>
                  <span>24/7</span>
                </li>
                <li>
                  <span>Saturday – Sunday</span>
                  <span>24/7</span>
                </li>
                <li>
                  <span>Holidays</span>
                  <span>24/7</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;