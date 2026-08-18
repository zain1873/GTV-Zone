import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PaymentImg from "../../assets/payment-cards.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-wrap justify-between gap-10">
        {/* Left column: Logo, description, contact info */}
        <div className="footer-col footer-about">
          <div className="footer-logo flex items-center gap-2">
            <img src="/logo-8k.png" alt="8K IPTV Logo" className="footer-logo-img" />
          </div>

          <p className="footer-description">
            With <span className="highlight">8K IPTV</span>, we make
            television affordable and accessible to everyone, anywhere! Join
            over 5,000 satisfied customers.
          </p>

          <div className="footer-contact">
            <p className="contact-email">support@8kiptv.co</p>

            <p className="contact-item flex items-center gap-2">
              <FaPhoneAlt className="contact-icon" aria-hidden="true" />
              +1 (210) 725-7388
            </p>

            <p className="contact-item flex items-center gap-2">
              <FaWhatsapp className="contact-icon" aria-hidden="true" />
              +1 (210) 725-7388
            </p>
          </div>
        </div>

        {/* Middle column: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links flex flex-col">
            <li><a href="/">Home</a></li>
            <li><a href="/free-trial">Free Trial</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/reseller-plans">Reseller Plans</a></li>
            <li><a href="/our-app">Our App</a></li>
            <li><a href="/setup-guide">Setup Guide</a></li>
          </ul>
        </div>

        {/* Middle column: Our Policies */}
        <div className="footer-col">
          <h3 className="footer-heading">Our Policies</h3>
          <ul className="footer-links flex flex-col">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms &amp; Conditions</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right column: Secure payment + card icons */}
        <div className="footer-col footer-payment">
          <h3 className="footer-heading">Secure Payment</h3>
         

          <img
            src={PaymentImg}
            alt="Accepted Payment Cards"
            className="payment-cards-img"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;  