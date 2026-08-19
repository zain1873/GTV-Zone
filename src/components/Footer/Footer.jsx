import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PaymentImg from "../../assets/payment-cards.png";
import GTA1Logo from "../../assets/GTA-1.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-grid">
          {/* Left column: Logo, description, contact info */}
          <div className="footer-col footer-about">
            <div className="footer-logo">
              <a href="/" className="footer-logo-link" aria-label="8K IPTV Home">
                <img
                  src={GTA1Logo}
                  alt="8K IPTV Logo"
                  className="footer-logo-img"
                />
              </a>
            </div>

            <p className="footer-description">
              With <span className="highlight">8K IPTV</span>, we make
              television affordable and accessible to everyone, anywhere!
              Join over 5,000 satisfied customers.
            </p>

            <div className="footer-contact">
              <a
                href="mailto:support@8kiptv.co"
                className="contact-item contact-email"
                aria-label="Email 8K IPTV support"
              >
                <span className="contact-email-text">support@8kiptv.co</span>
              </a>

              <a
                href="tel:+12107257388"
                className="contact-item"
                aria-label="Call 8K IPTV"
              >
                <span className="contact-icon-wrap">
                  <FaPhoneAlt className="contact-icon" aria-hidden="true" />
                </span>
                +1 (210) 725-7388
              </a>

              <a
                href="https://wa.me/12107257388"
                className="contact-item"
                aria-label="Message 8K IPTV on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon-wrap">
                  <FaWhatsapp className="contact-icon" aria-hidden="true" />
                </span>
                +1 (210) 725-7388
              </a>
            </div>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          {/* Middle column: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/free-trial">Free Trial</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/reseller-plans">Reseller Plans</a>
              </li>
              <li>
                <a href="/our-app">Our App</a>
              </li>
              <li>
                <a href="/setup-guide">Setup Guide</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Middle column: Our Policies */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Policies</h3>
            <ul className="footer-links">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="/refund-policy">Refund Policy</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          {/* Right column: Secure payment + card icons */}
          <div className="footer-col footer-payment">
            <h3 className="footer-heading">Secure Payment</h3>

            <div className="payment-card-frame">
              <img
                src={PaymentImg}
                alt="Accepted Payment Cards"
                className="payment-cards-img"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;