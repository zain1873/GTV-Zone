import React from "react";
import "./HeroSection.css";
import heroVideo from "../../assets/project-banner-video.mp4";
import Navbar from "../Navbar/Navbar";

// Simple Hero Section component with Navbar + background video area
// Tailwind is used only for layout (flex, spacing, sizing, alignment)
// All colors, fonts, hover effects, and responsiveness are in HeroSection.css
function HeroSection() {
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

      <div className="hero-overlay"></div>

      {/* Reusable Navbar (shared with Contact page) */}
      <Navbar />

      {/* Hero content */}
      <div className="flex flex-col justify-center hero-content px-6 md:px-16">
        <div className="flex items-center gap-4 welcome-row">
          <span className="welcome-text">Welcome</span>
          <span className="welcome-line"></span>
        </div>

        <h1 className="hero-title">GTV</h1>

        <p className="hero-description">
          Sign up now for <strong>GTV</strong> and enjoy over{" "}
          <strong>45,000 Live Channels</strong>, <strong>VODs</strong>, and{" "}
          <strong>EPG</strong> on all your favorite devices. Affordable
          pricing, instant access. Don&apos;t wait—subscribe today!
        </p>

        <a href="/contact" className="free-trial-btn">
          Contact
        </a>
      </div>
    </header>
  );
}

export default HeroSection;