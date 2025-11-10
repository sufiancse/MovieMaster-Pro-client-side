import React from "react";
import { NavLink } from "react-router";

const recentMovies = [
  {
    id: 101,
    title: "Inception",
    rating: 8.8,
    genre: "Sci-Fi, Thriller",
    year: 2010,
    poster:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 102,
    title: "Interstellar",
    rating: 8.6,
    genre: "Adventure, Drama, Sci-Fi",
    year: 2014,
    poster:
      "https://images.unsplash.com/photo-1502136969935-8e53d2f3f0ff?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 103,
    title: "The Matrix",
    rating: 8.7,
    genre: "Action, Sci-Fi",
    year: 1999,
    poster:
      "https://images.unsplash.com/photo-1509228627150-1a8b9d7f1d37?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 104,
    title: "Joker",
    rating: 8.4,
    genre: "Crime, Drama, Thriller",
    year: 2019,
    poster:
      "https://images.unsplash.com/photo-1601582589965-038e5a45f1b5?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 105,
    title: "Avengers: Endgame",
    rating: 8.4,
    genre: "Action, Adventure, Drama",
    year: 2019,
    poster:
      "https://images.unsplash.com/photo-1581905764498-3c0d1f3c2c9f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 106,
    title: "Parasite",
    rating: 8.6,
    genre: "Comedy, Drama, Thriller",
    year: 2019,
    poster:
      "https://images.unsplash.com/photo-1581276879432-15a5d0f78a6e?auto=format&fit=crop&w=500&q=80",
  },
];

const RecentlyAdded = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Recently Added</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {recentMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 "
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{movie.title}</h3>
              <p className="text-yellow-400 font-semibold mt-1">
                ⭐ {movie.rating}
              </p>
              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Genre:</span> {movie.genre}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Year:</span> {movie.year}
              </p>
              <div className="flex justify-between items-center">
                <NavLink
                  to={`/movie/${movie.id}`}
                  className="mt-3 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                >
                  Details
                </NavLink>
                <button className="mt-3 inline-block bg-transparent border hover:text-red-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"> WatchList</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
