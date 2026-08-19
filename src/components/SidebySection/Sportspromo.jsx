import React from "react";
import "./Sportspromo.css";
import sideImg from "../../assets/sidebyimg.png";

function SportsPromo() {
  return (
    <section className="sports-promo">
      <div className="sports-promo-container max-w-6xl mx-auto px-4 flex items-center flex-wrap">
        {/* Left side - image */}
        <div className="sports-promo-image-wrap flex items-center justify-center">
          <img
            src={sideImg}
            alt="8K IPTV streaming on TV, tablet and phone"
            className="sports-promo-image"
          />
        </div>

        {/* Right side - text content */}
        <div className="sports-promo-text flex flex-col">
          <h2 className="sports-promo-title">
            8K IPTV – Don&apos;t Miss the Best Live Sports Channels
          </h2>

          <p className="sports-promo-paragraph">
            <span className="sports-promo-highlight">8K IPTV</span> – The #1
            Premium IPTV Subscription Worldwide, offering over 45,000
            channels in 8K, 4K, FHD, and HD quality. Enjoy unlimited movies
            and series, plus all your favorite TV in one seamless 8K
            subscription with multi-screen streaming—no interruptions, no
            hassle!
          </p>

          <p className="sports-promo-paragraph">
            <span className="sports-promo-highlight">8K IPTV</span> – Enjoy a
            stable IPTV experience with breathtaking picture quality in 8K,
            4K, FHD, HEVC, and HD. Stream seamlessly, optimized for your
            connection speed, and enjoy uninterrupted, high-quality
            entertainment. Join us today!
          </p>

          <p className="sports-promo-paragraph">
            Catch all the biggest games and PPV events with{" "}
            <span className="sports-promo-highlight">8K IPTV</span>! Sit
            back, grab your popcorn, and immerse yourself in the action!
          </p>
        </div>
      </div>
    </section>
  );
}

export default SportsPromo;