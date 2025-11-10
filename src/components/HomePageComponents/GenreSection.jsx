import React from "react";

const genres = [
  "Action",
  "Drama",
  "Comedy",
  "Thriller",
  "Sci-Fi",
  "Romance",
  "Horror",
  "Adventure",
  "Animation",
  "Mystery",
];

const GenreSection = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Genres</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-red-500 text-white font-semibold text-center py-3 rounded-lg cursor-pointer transition-colors duration-300 shadow-md"
          >
            {genre}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
