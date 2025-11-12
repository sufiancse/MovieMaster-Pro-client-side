import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import LoadingSpinner from "../Loading";

const MovieDetailsCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const movie = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, [1000]);
    return () => clearTimeout(timer);
  }, []);

  if(loading) return <LoadingSpinner />

  return (
    <div className="flex justify-center items-center min-h-screen  p-4">
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {movie.title}
          </h2>
          <p className="text-lg text-indigo-300 font-semibold mb-4">
            {movie.genre} • {movie.releaseYear}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-200 mb-4">
            <p>
              <span className="font-semibold">Director:</span> {movie.director}
            </p>
            <p>
              <span className="font-semibold">Cast:</span> {movie.cast}
            </p>
            <p>
              <span className="font-semibold">Rating:</span> ⭐ {movie.rating}
            </p>
            <p>
              <span className="font-semibold">Duration:</span> {movie.duration}{" "}
              min
            </p>
            <p>
              <span className="font-semibold">Language:</span> {movie.language}
            </p>
            <p>
              <span className="font-semibold">Country:</span> {movie.country}
            </p>
          </div>

          <p className="text-gray-300 text-sm mb-6 max-w-2xl">
            {expanded
              ? movie.plotSummary
              : movie.plotSummary.substring(0, 200) + "..."}
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-indigo-400 hover:text-indigo-300 text-xs"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          </p>

          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">
              Added by: {movie.addedBy}
            </span>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
