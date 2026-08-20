import React from "react";
import "./LegalPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



function renderBlocks(blocks) {
  if (!blocks || blocks.length === 0) return null;

  return blocks.map((block, idx) => {
    // Bullet / numbered list
    if (Array.isArray(block)) {
      return (
        <ul key={idx} className="legal-list">
          {block.map((item, i) => (
            <li key={`${idx}-${i}`}>{item}</li>
          ))}
        </ul>
      );
    }

    // Optional sub-heading inside a section
    if (typeof block === "object" && block.subheading) {
      return (
        <h3 key={idx} className="legal-subheading">
          {block.subheading}
        </h3>
      );
    }

    // Plain paragraph / text
    return (
      <p key={idx} className="legal-paragraph">
        {block}
      </p>
    );
  });
}

function LegalPage({ eyebrow, title, intro, updated, sections, children }) {
  return (
    <div className="legal-page">
      {/* ===== Reusable Navbar ===== */}
      <Navbar />

      {/* ===== Hero header ===== */}
      <section className="legal-hero">
        <div className="legal-hero-glow" aria-hidden="true" />
        <div className="legal-container legal-hero-inner">
          <span className="legal-eyebrow">{eyebrow}</span>
          <h1 className="legal-title">{title}</h1>
          <p className="legal-subtitle">{intro}</p>
          {updated && <p className="legal-updated">{updated}</p>}
        </div>
      </section>

      {/* ===== Body ===== */}
      <section className="legal-content">
        <div className="legal-container legal-layout">
          {/* Table of contents sidebar */}
          {sections?.length > 0 && (
            <aside className="legal-toc" aria-label={`${title} contents`}>
              <h2 className="legal-toc-title">On this page</h2>
              <ul className="legal-toc-list">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Main content */}
          <div className="legal-body">
            {children
              ? children
              : sections?.map((section, sIdx) => {
                  const isFirst = sIdx === 0;
                  return (
                    <article
                      key={section.id}
                      id={section.id}
                      className={`legal-section${isFirst ? " legal-first" : ""}`}
                    >
                      <h2 className="legal-section-heading">{section.heading}</h2>
                      {renderBlocks(section.blocks)}
                    </article>
                  );
                })}

            {/* Contact prompt */}
            <div className="legal-contact-note">
              <p>
                Questions about this policy? Contact our support team at{" "}
                <a href="mailto:support@iptv.co" className="legal-inline-link">
                  support@iptv.co
                </a>{" "}
                or chat with us on WhatsApp anytime.
              </p>
              <a
                href="https://wa.me/447346521271"
                target="_blank"
                rel="noopener noreferrer"
                className="legal-whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LegalPage;