import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./ChannelSlider.css";

// Local channel logo assets (src/assets/stream-slider)
import vtmLogo from "../../assets/stream-slider/VTM-1.png";
import canal2Logo from "../../assets/stream-slider/CANAL2.png";
import france2Logo from "../../assets/stream-slider/France-2-1.png";
import france3Logo from "../../assets/stream-slider/France-3-1.png";
import france4Logo from "../../assets/stream-slider/France-4-1.png";
import france5Logo from "../../assets/stream-slider/France-5-1.png";
import huluLogo from "../../assets/stream-slider/hulu-logo-1.png";
import ab1Logo from "../../assets/stream-slider/AB1-HD.png";
import beinLogo from "../../assets/stream-slider/Bein-Sport.png";
import tf1Logo from "../../assets/stream-slider/TF1-1.png";
import m6Logo from "../../assets/stream-slider/M6-HD.png";
import w9Logo from "../../assets/stream-slider/W9.png";
import golfPlusLogo from "../../assets/stream-slider/Golf-plus.png";
import rtl9Logo from "../../assets/stream-slider/RTL9.png";
import tipikLogo from "../../assets/stream-slider/TIPIK.png";

const channels = [
  { id: 1, name: "VTM", logo: vtmLogo },
  { id: 2, name: "TF1", logo: tf1Logo },
  { id: 3, name: "France 2", logo: france2Logo },
  { id: 4, name: "France 3", logo: france3Logo },
  { id: 5, name: "France 4", logo: france4Logo },
  { id: 6, name: "France 5", logo: france5Logo },
  { id: 7, name: "M6", logo: m6Logo },
  { id: 8, name: "W9", logo: w9Logo },
  { id: 9, name: "Canal 2", logo: canal2Logo },
  { id: 10, name: "Hulu", logo: huluLogo },
  { id: 11, name: "AB1", logo: ab1Logo },
  { id: 12, name: "beIN Sports", logo: beinLogo },
  { id: 13, name: "Golf Plus", logo: golfPlusLogo },
  { id: 14, name: "RTL9", logo: rtl9Logo },
  { id: 15, name: "TIPIK", logo: tipikLogo },
];

function ChannelSlider() {
  return (
    <section className="w-full channel-slider-section">
      <Swiper
        modules={[Autoplay]}
        // Mouse drag / swipe support
        grabCursor={true}
        // Auto slide every 3 seconds
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={16}
        slidesPerView={2}
        // Responsive breakpoints - more slides visible on bigger screens
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}
        className="channel-swiper"
      >
        {channels.map((channel) => (
          <SwiperSlide key={channel.id}>
            <div className="flex items-center justify-center channel-card">
              <img
                src={channel.logo}
                alt={channel.name}
                className="channel-logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ChannelSlider;