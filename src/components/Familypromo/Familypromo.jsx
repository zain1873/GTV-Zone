import React from "react";
import "./Familypromo.css";
import kidsImg from "../../assets/kidsImg.png";

function FamilyPromo() {
  return (
    <section className="family-promo">
      <div className="family-promo-container flex items-center flex-wrap">
        {/* Left side - text content */}
        <div className="family-promo-text flex flex-col px-6 md:px-16">
          <h2 className="family-promo-title">
            8K IPTV – The Best IPTV for Families + KIDS
          </h2>

          <p className="family-promo-paragraph">
            Our live IPTV streaming service is ideal for families with young
            children. With{" "}
            <span className="family-promo-highlight">8K IPTV</span>,
            you&apos;ll have access to a vast collection of kid-friendly
            content, including animated series and educational shows. Keep
            your little ones entertained and learning—subscribe now!
          </p>

          <a href="#channels" className="family-promo-btn flex items-center gap-2 w-fit">
            Our Channels
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="4.5"
                width="19"
                height="12"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8.5 20.5h7M12 16.5v4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>

        {/* Right side - image */}
        <div className="family-promo-image-wrap flex items-center justify-center">
          <img
            src={kidsImg}
            alt="8K IPTV kids and family content"
            className="family-promo-image"
          />
        </div>
      </div>
    </section>
  );
}

export default FamilyPromo;