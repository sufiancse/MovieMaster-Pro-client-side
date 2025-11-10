import React from "react";

const topRatedMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    rating: 9.3,
    image:
      "https://images.unsplash.com/photo-1581905764498-3c0d1f3c2c9f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    title: "The Godfather",
    rating: 9.2,
    image:
      "https://images.unsplash.com/photo-1607331004581-1e12615f1263?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: 9.0,
    image:
      "https://images.unsplash.com/photo-1603464584406-64c17c5c172f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    rating: 8.9,
    image:
      "https://images.unsplash.com/photo-1606788075760-44a81c7b3ee1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Fight Club",
    rating: 8.8,
    image:
      "https://images.unsplash.com/photo-1600077074855-c55ef348b2ef?auto=format&fit=crop&w=500&q=80",
  },
];

const TopRatedMovies = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRatedMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{movie.title}</h3>
              <p className="text-yellow-400 font-semibold mt-2">
                ⭐ {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
