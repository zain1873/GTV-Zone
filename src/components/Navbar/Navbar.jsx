import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
import GTA1Logo from "../../assets/GTA-1.png";

// Maps the current URL path/hash to the nav link that should appear active.
function getActiveKey(location) {
  const path = location.pathname.replace(/\/+$/, "");

  // Hash-based (single-page anchor sections)
  const hash = (location.hash || "").replace("#", "");
  const sectionKeys = {
    home: "home",
    "free-trial": "free-trial",
    pricing: "pricing",
    channels: "channels",
    setup: "setup",
    reseller: "reseller",
    "our-app": "our-app",
  };
  if (sectionKeys[hash]) return sectionKeys[hash];

  // Pathname-based routes
  const pathKeys = {
    "": "home",
    "/": "home",
    "/pricing": "pricing",
    "/channels": "channels",
    "/setup": "setup",
    "/reseller": "reseller",
  };

  return pathKeys[path] || "home";
}

function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);


  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const activeKey = getActiveKey(location);
  const navLinkClass = (key) =>
    `nav-link${activeKey === key ? " active-link" : ""}`;

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleResize() {
      setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex items-center justify-between w-full px-6 py-4 navbar${
          scrolled ? " nav-scrolled" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 logo">
          <a href="/" className="logo-link" aria-label="GTV Home">
            <img src={GTA1Logo} alt="GTV Logo" className="hero-logo-img" />
          </a>
        </div>

        <ul className="flex items-center gap-8 nav-links">
          <li>
            <a href="/" className={navLinkClass("home")}>
              HOME
            </a>
          </li>

          <li>
            <a href="/pricing" className={navLinkClass("pricing")}>
              PRICING
            </a>
          </li>
          <li>
            <a href="/channels" className={navLinkClass("channels")}>
              CHANNELS
            </a>
          </li>
          <li>
            <a href="/setup" className={navLinkClass("setup")}>
              SETUP
            </a>
          </li>
          <li>
            <a href="/reseller" className={navLinkClass("reseller")}>
              RESELLER
            </a>
          </li>
          <li>
  
          </li>
        </ul>

        <a href="#client-area" className="client-area-btn desktop-only">
          Client Area
        </a>

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
              <a
                href="#home"
                onClick={toggleMenu}
                className={navLinkClass("home")}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#free-trial"
                onClick={toggleMenu}
                className={navLinkClass("free-trial")}
              >
                FREE TRIAL
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                onClick={toggleMenu}
                className={navLinkClass("pricing")}
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href="#channels"
                onClick={toggleMenu}
                className={navLinkClass("channels")}
              >
                CHANNELS
              </a>
            </li>
            <li>
              <a
                href="/setup"
                onClick={toggleMenu}
                className={navLinkClass("setup")}
              >
                SETUP
              </a>
            </li>
            <li>
              <a
                href="#reseller"
                onClick={toggleMenu}
                className={navLinkClass("reseller")}
              >
                RESELLER
              </a>
            </li>
            <li>
              <a
                href="#our-app"
                onClick={toggleMenu}
                className={navLinkClass("our-app")}
              >
                OUR APP
              </a>
            </li>
            <li>
              <a
                href="#client-area"
                onClick={toggleMenu}
                className="client-area-btn"
              >
                Client Area
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
