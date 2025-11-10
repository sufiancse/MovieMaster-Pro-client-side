import React from "react";

const MovieDetailsCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const movie = {
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
    rating: 8.8,
    duration: 148,
    plotSummary:
      "A thief who steals corporate secrets through dream-sharing technology...",
    posterUrl:
      "https://www.originalfilmart.com/cdn/shop/files/inception_2010_advance_original_film_art_f4801a23-edb3-4db0-b382-1e2aec1dc927_5000x.jpg?v=1715962948",
    language: "English",
    country: "USA",
    addedBy: "user@example.com",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl">
        {/* Large Poster */}
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {movie.title}
          </h2>
          <p className="text-lg text-indigo-300 font-semibold mb-4">
            {movie.genre} • {movie.releaseYear}
          </p>

          {/* Info Grid */}
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

          {/* Plot */}
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

          {/* Footer */}
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
