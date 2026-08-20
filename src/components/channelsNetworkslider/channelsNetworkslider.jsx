import React from "react";
import "./channelsNetworkslider.css";


// -----------------------------
import logo1 from "../../assets/ChannelSlider/1.png";
import logo2 from "../../assets/ChannelSlider/2.webp";
import logo3 from "../../assets/ChannelSlider/3.jpg";
import logo4 from "../../assets/ChannelSlider/4.jpg";
import logo5 from "../../assets/ChannelSlider/5.jpg";
import logo6 from "../../assets/ChannelSlider/6.jpg";
import logo7 from "../../assets/ChannelSlider/7.jpg";
import logo8 from "../../assets/ChannelSlider/8.jpg";

const CHANNEL_LOGOS = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

function ChannelSlider() {
  return (
    <section className="channel-slider">
      {/* Track is duplicated once so the animation can loop seamlessly */}
      <div className="channel-slider-track flex items-center">
        {CHANNEL_LOGOS.map((logo, index) => (
          <div className="channel-slider-box flex items-center justify-center" key={`a-${index}`}>
            <img src={logo} alt={`Channel logo ${index + 1}`} className="channel-slider-img" />
          </div>
        ))}

        {/* Duplicate set - creates the illusion of an infinite loop */}
        {CHANNEL_LOGOS.map((logo, index) => (
          <div className="channel-slider-box flex items-center justify-center" key={`b-${index}`}>
            <img src={logo} alt={`Channel logo ${index + 1}`} className="channel-slider-img" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ChannelSlider;