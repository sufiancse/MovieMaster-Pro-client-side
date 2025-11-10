import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const featuredMovies = [
  {
    title: "Inception",
    posterUrl: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    rating: 8.8,
    genre: "Sci-Fi"
  },
  {
    title: "Interstellar",
    posterUrl: "https://m.media-amazon.com/images/I/71n58vXb3RL._AC_SY679_.jpg",
    rating: 8.6,
    genre: "Sci-Fi"
  },
  {
    title: "The Dark Knight",
    posterUrl: "https://m.media-amazon.com/images/I/71poxLRz3zL._AC_SY679_.jpg",
    rating: 9.0,
    genre: "Action"
  },
  {
    title: "Avengers: Endgame",
    posterUrl: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    rating: 8.4,
    genre: "Action"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Swipe Handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => (prev + 1) % featuredMovies.length),
    onSwipedRight: () => setCurrent((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers} className="relative w-full h-[80vh] overflow-hidden rounded-xl mt-25 md:mt-10">
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <img
            src={featuredMovies[current].posterUrl}
            alt={featuredMovies[current].title}
            className="w-full h-full object-cover brightness-75 overflow-hidden rounded-xl"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-16 left-8 max-w-lg">
            <motion.h2
              key={featuredMovies[current].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-xl tracking-wide"
            >
              {featuredMovies[current].title}
            </motion.h2>
            <motion.p
              key={featuredMovies[current].genre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-2 text-gray-300 text-lg md:text-xl drop-shadow-md"
            >
              {featuredMovies[current].genre} | Rating: {featuredMovies[current].rating} ⭐
            </motion.p>

            {/* Watch Now Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Watch Now
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
