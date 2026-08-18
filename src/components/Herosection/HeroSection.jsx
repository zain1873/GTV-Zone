import React, { useState } from "react";
import "./HeroSection.css";
import heroVideo from "../../assets/project-banner-video.mp4";

// Simple Hero Section component with Navbar + background video area
// Tailwind is used only for layout (flex, spacing, sizing, alignment)
// All colors, fonts, hover effects, and responsiveness are in HeroSection.css
function HeroSection() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles the mobile menu when the hamburger icon is clicked
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="hero-wrapper">
      {/* Background video from the project banner asset */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-fallback.jpg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay on top of the video for readability */}
      <div className="hero-overlay"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between w-full px-6 py-4 navbar">
        {/* Logo */}
        <div className="flex items-center gap-2 logo">
          {/* TV icon (inline SVG, no external package needed) */}
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="6"
              width="20"
              height="13"
              rx="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M8 22H16M12 19V22M7 3L11 6M17 3L13 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="logo-text">8K</span>
        </div>

        {/* Menu links - desktop (hidden on mobile via CSS media query) */}
        <ul className="flex items-center gap-8 nav-links">
          <li>
            <a href="#home" className="nav-link active-link">
              HOME
            </a>
          </li>
          <li>
            <a href="#free-trial" className="nav-link">
              FREE TRIAL
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              PRICING
            </a>
          </li>
          <li>
            <a href="#channels" className="nav-link">
              CHANNELS
            </a>
          </li>
          <li>
            <a href="#setup" className="nav-link">
              SETUP
            </a>
          </li>
          <li>
            <a href="#reseller" className="nav-link">
              RESELLER
            </a>
          </li>
          <li>
            <a href="#our-app" className="nav-link">
              OUR APP
            </a>
          </li>
        </ul>

        {/* Client Area button - hidden on mobile via CSS media query */}
        <a href="#client-area" className="client-area-btn desktop-only">
          Client Area
        </a>

        {/* Hamburger icon - shown on mobile via CSS media query */}
        <button className="hamburger-btn" onClick={toggleMenu}>
          {menuOpen ? (
            /* Close (X) icon */
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            /* Hamburger (menu) icon */
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu - shows/hides based on menuOpen state */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul className="flex flex-col items-center gap-6">
            <li>
              <a href="#home" onClick={toggleMenu} className="nav-link active-link">
                HOME
              </a>
            </li>
            <li>
              <a href="#free-trial" onClick={toggleMenu} className="nav-link">
                FREE TRIAL
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={toggleMenu} className="nav-link">
                PRICING
              </a>
            </li>
            <li>
              <a href="#channels" onClick={toggleMenu} className="nav-link">
                CHANNELS
              </a>
            </li>
            <li>
              <a href="#setup" onClick={toggleMenu} className="nav-link">
                SETUP
              </a>
            </li>
            <li>
              <a href="#reseller" onClick={toggleMenu} className="nav-link">
                RESELLER
              </a>
            </li>
            <li>
              <a href="#our-app" onClick={toggleMenu} className="nav-link">
                OUR APP
              </a>
            </li>
            <li>
              <a href="#client-area" onClick={toggleMenu} className="client-area-btn">
                Client Area
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero content */}
      <div className="flex flex-col justify-center hero-content px-6 md:px-16">
        <div className="flex items-center gap-4 welcome-row">
          <span className="welcome-text">Welcome</span>
          <span className="welcome-line"></span>
        </div>

        <h1 className="hero-title">8K IPTV</h1>

        <p className="hero-description">
          Sign up now for <strong>8K IPTV</strong> and enjoy over{" "}
          <strong>45,000 Live Channels</strong>, <strong>VODs</strong>, and{" "}
          <strong>EPG</strong> on all your favorite devices. Affordable
          pricing, instant access. Don&apos;t wait—subscribe today!
        </p>

        <a href="#free-trial" className="free-trial-btn">
          Free Trial 24H
        </a>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/00000000000"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        {/* WhatsApp icon (inline SVG, no external package needed) */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.84 19L7.54 18.82L4.42 19.65L5.26 16.6L5.06 16.29C4.22 14.98 3.79 13.46 3.79 11.91C3.79 7.37 7.5 3.66 12.05 3.66C14.25 3.66 16.32 4.52 17.87 6.08C19.42 7.64 20.29 9.71 20.29 11.91C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 13.97C16.32 13.85 15.13 13.26 14.9 13.18C14.68 13.1 14.52 13.06 14.35 13.3C14.19 13.54 13.72 14.09 13.58 14.26C13.44 14.42 13.3 14.44 13.06 14.32C12.82 14.2 12.03 13.94 11.1 13.11C10.37 12.46 9.88 11.66 9.74 11.42C9.6 11.18 9.72 11.05 9.84 10.93C9.95 10.82 10.08 10.64 10.2 10.5C10.32 10.36 10.36 10.26 10.44 10.1C10.52 9.93 10.48 9.79 10.42 9.67C10.36 9.55 9.88 8.35 9.68 7.86C9.48 7.39 9.28 7.45 9.13 7.44C8.99 7.43 8.83 7.43 8.66 7.43C8.5 7.43 8.23 7.49 8.01 7.73C7.79 7.97 7.16 8.56 7.16 9.76C7.16 10.96 8.03 12.12 8.15 12.28C8.27 12.44 9.87 14.91 12.32 15.97C12.9 16.22 13.35 16.37 13.7 16.48C14.28 16.67 14.81 16.64 15.23 16.58C15.7 16.51 16.68 15.99 16.88 15.42C17.08 14.85 17.08 14.36 17.02 14.26C16.96 14.16 16.8 14.09 16.56 13.97Z" />
        </svg>
      </a>
    </header>
  );
}

export default HeroSection;