import React from "react";

const TopRatedMovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-xs mx-auto flex flex-col">
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 grow flex flex-col justify-between">
        <h3 className="text-lg font-bold text-white line-clamp-2  overflow-hidden">
          {movie.title}
        </h3>
        <p className="text-yellow-400 font-semibold mt-2">Rating: {movie.rating} ⭐</p>
      </div>
    </div>
  );
};

export default TopRatedMovieCard;
