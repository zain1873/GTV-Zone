import React, { useEffect, useState } from "react";
import "./Navbar.css";
import GTA1Logo from "../../assets/GTA-1.png";

function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);


  const [scrolled, setScrolled] = useState(false);

  // Toggles the mobile menu when the hamburger icon is clicked
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
          <a href="/" className="logo-link" aria-label="8K IPTV Home">
            <img src={GTA1Logo} alt="8K IPTV Logo" className="hero-logo-img" />
          </a>
        </div>

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
                className="nav-link active-link"
              >
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
