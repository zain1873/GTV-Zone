import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
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
              <a href="/" className="footer-logo-link" aria-label="GTV Home">
                <img
                  src={GTA1Logo}
                  alt="GTV Logo"
                  className="footer-logo-img"
                />
              </a>
            </div>

            <p className="footer-description">
              With <span className="highlight">GTV</span>, we make
              television affordable and accessible to everyone, anywhere!
              Join over 5,000 satisfied customers.
            </p>

            <div className="footer-contact">
              <a
                href="mailto:livexatv.info@gmail.com"
                className="contact-item contact-email"
                aria-label="Email GTV support"
              >
                <span className="contact-email-text">livexatv.info@gmail.com</span>
              </a>

              {/* <a
                href="tel:+12107257388"
                className="contact-item"
                aria-label="Call GTV"
              >
                <span className="contact-icon-wrap">
                  <FaPhoneAlt className="contact-icon" aria-hidden="true" />
                </span>
                +1 (210) 725-7388
              </a> */}

              <a
                href="https://wa.me/447346521271"
                className="contact-item"
                aria-label="Message GTV on WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-icon-wrap">
                  <FaWhatsapp className="contact-icon" aria-hidden="true" />
                </span>
                +44 7346 521271
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
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/channels">Channels</a>
              </li>
  
              <li>
                <a href="/reseller">Reseller</a>
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

          {/* Right column: Popular Channels */}
          <div className="footer-col">
            <h3 className="footer-heading">Popular Channels</h3>
            <ul className="footer-links">
              <li>
                <a href="/contact">Sports &amp; Pay-Per-View</a>
              </li>
              <li>
                <a href="/contact">Movies &amp; Cinema</a>
              </li>
              <li>
                <a href="/contact">TV Shows &amp; Series</a>
              </li>
              <li>
                <a href="/contact">Kids &amp; Family</a>
              </li>
              <li>
                <a href="/contact">News &amp; Documentaries</a>
              </li>
              <li>
                <a href="/contact">International Channels</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;