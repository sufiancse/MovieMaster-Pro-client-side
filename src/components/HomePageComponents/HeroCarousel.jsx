import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import useAxios from "../../hooks/useAxios";

const HeroCarousel = () => {
  const axios = useAxios();
  const [current, setCurrent] = useState(0);
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("/latest-movies")
      .then((res) => setFeaturedMovies(res.data))
      .catch((err) => console.error("Error fetching movies:", err));
  }, [axios]);

  useEffect(() => {
    if (featuredMovies.length > 0) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % featuredMovies.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [featuredMovies]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) => (prev + 1) % featuredMovies.length),
    onSwipedRight: () =>
      setCurrent(
        (prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (featuredMovies.length === 0) {
    return (
      <div className="flex items-center justify-center h-[80vh] bg-gray-900 text-white text-xl">
        Loading featured movies...
      </div>
    );
  }

  const movie = featuredMovies[current];

  return (
    <div
      {...handlers}
      className="relative w-full h-[500px] md:[650px] overflow-hidden rounded-xl mt-25 md:mt-10"
    >
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
            src={movie.posterUrl}
            alt={movie.title}
            className="w-full h-full object-cover md:object-center brightness-90 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>

          <div className="absolute bottom-16 left-8 max-w-lg">
            <motion.h2
              key={movie.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-red-500 drop-shadow-xl tracking-wide"
            >
              {movie.title}
            </motion.h2>

            <motion.p
              key={movie.genre}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-2 text-gray-300 text-lg md:text-xl drop-shadow-md"
            >
              {movie.genre} | Rating: {movie.rating} ⭐
            </motion.p>

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
