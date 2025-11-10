import React from "react";

const AboutPlatform = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          About MovieMaster Pro
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          MovieMaster Pro is your ultimate movie management platform. Browse, manage, 
          and organize your favorite movies with ease. Discover trending movies, 
          track your personal collection, and never miss a blockbuster again!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              Browse Movies
            </h3>
            <p className="text-gray-300">
              Explore thousands of movies with detailed information including rating, genre, cast, and more.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              My Collection
            </h3>
            <p className="text-gray-300">
              Add movies to your personal collection and keep track of what you’ve watched.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              Watchlist
            </h3>
            <p className="text-gray-300">
              Create a watchlist for movies you plan to watch, so you never forget any.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              Advanced Filtering
            </h3>
            <p className="text-gray-300">
              Filter movies by genre, rating, release year, and more for quick discovery.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              Theme Toggle
            </h3>
            <p className="text-gray-300">
              Switch between light and dark mode for a comfortable viewing experience.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-red-500 mb-3">
              Responsive Design
            </h3>
            <p className="text-gray-300">
              Fully responsive interface optimized for mobile, tablet, and desktop.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
