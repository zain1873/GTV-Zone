import React, { useEffect, useRef, useState } from "react";
import "./Movieslider.css";


import movie1 from "../../assets/movies/1.jpg";
import movie2 from "../../assets/movies/2.jpg";
import movie3 from "../../assets/movies/3.jpg";
import movie4 from "../../assets/movies/4.jpg";
import movie5 from "../../assets/movies/5.jpg";
import movie6 from "../../assets/movies/6.jpg";
import movie7 from "../../assets/movies/7.jpg";
import movie8 from "../../assets/movies/1.jpg";
import movie9 from "../../assets/movies/16.jpg";
import movie10 from "../../assets/movies/10.jpg";
import movie11 from "../../assets/movies/11.jpg";
import movie12 from "../../assets/movies/12.jpg";
import movie13 from "../../assets/movies/13.jpg";
import movie14 from "../../assets/movies/14.jpg";
import movie15 from "../../assets/movies/15.png";
import movie16 from "../../assets/movies/16.jpg";

const MOVIE_POSTERS = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
  movie11,
  movie12,
  movie13,
  movie14,
  movie15,
  movie16,
];

// How far the slider moves on each auto-play tick (in pixels)
const SCROLL_STEP = 220;
// How often the slider auto-plays (in milliseconds)
const AUTO_PLAY_DELAY = 2000;

function MovieSlider() {
  // Reference to the scrollable track so we can scroll it with JS
  const trackRef = useRef(null);

  // Tracks whether the user is currently dragging with the mouse
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // ---------- Auto-play every 2 seconds ----------
  useEffect(() => {
    const intervalId = setInterval(() => {
      const track = trackRef.current;
      if (!track || isDragging) return;

      const isAtEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 5;

      if (isAtEnd) {
        // Loop back to the start once we reach the end
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: SCROLL_STEP, behavior: "smooth" });
      }
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(intervalId);
  }, [isDragging]);

  // ---------- Mouse drag to scroll ----------
  function handleMouseDown(e) {
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragStartScrollLeft.current = trackRef.current.scrollLeft;
  }

  function handleMouseMove(e) {
    if (!isDragging) return;
    const distance = e.pageX - dragStartX.current;
    trackRef.current.scrollLeft = dragStartScrollLeft.current - distance;
  }

  function stopDragging() {
    setIsDragging(false);
  }

  return (
    <section className="movie-slider">
      <div className="movie-slider-container mx-auto px-4">
        <h2 className="movie-slider-title">Trending Movies</h2>

        <div
          ref={trackRef}
          className={
            isDragging
              ? "movie-slider-track flex movie-slider-dragging"
              : "movie-slider-track flex"
          }
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {MOVIE_POSTERS.map((poster, index) => (
            <div className="movie-card" key={index}>
              <img
                src={poster}
                alt={`Movie poster ${index + 1}`}
                className="movie-card-img"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;