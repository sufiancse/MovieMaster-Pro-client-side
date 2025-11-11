import React, { useState } from "react";

const AddMovies = () => {
  const [movie, setMovie] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    director: "",
    cast: "",
    rating: "",
    duration: "",
    plotSummary: "",
    posterUrl: "",
    language: "",
    country: "",
    addedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Added:", movie);
    // Later you can connect this to backend/API
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl  rounded-xl shadow-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold  text-center mb-4">
          🎬 Add Movie - MovieMaster Pro
        </h2>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter movie title"
            required
          />
        </div>

        {/* Genre & Release Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Genre
            </label>
            <input
              type="text"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="e.g. Sci-Fi"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Release Year
            </label>
            <input
              type="number"
              name="releaseYear"
              value={movie.releaseYear}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="2010"
            />
          </div>
        </div>

        {/* Director & Cast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Director
            </label>
            <input
              type="text"
              name="director"
              value={movie.director}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Director name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Cast
            </label>
            <input
              type="text"
              name="cast"
              value={movie.cast}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Main actors"
            />
          </div>
        </div>

        {/* Rating & Duration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={movie.rating}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="e.g. 8.8"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Duration (minutes)
            </label>
            <input
              type="number"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="148"
            />
          </div>
        </div>

        {/* Plot Summary */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Plot Summary
          </label>
          <textarea
            name="plotSummary"
            value={movie.plotSummary}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="4"
            placeholder="Enter plot summary..."
          ></textarea>
        </div>

        {/* Poster URL */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Poster URL
          </label>
          <input
            type="url"
            name="posterUrl"
            value={movie.posterUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        {/* Language & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Language
            </label>
            <input
              type="text"
              name="language"
              value={movie.language}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="English"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={movie.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="USA"
            />
          </div>
        </div>

        {/* Added By */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Added By
          </label>
          <input
            type="email"
            name="addedBy"
            value={movie.addedBy}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="user@example.com"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary text-white py-3 rounded-lg font-semibold  transition-colors duration-300"
        >
          ➕ Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
