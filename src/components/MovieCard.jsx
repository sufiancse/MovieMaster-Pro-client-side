import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ">
        <img
          src={movie.posterUrl}
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
            <span className="font-semibold">Year:</span> {movie.releaseYear}
          </p>
          <div className="flex justify-between items-center">
            <Link
              to={`/movies/movie-details/${movie._id}`}
              className="mt-3 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            >
              Details
            </Link>
            <button className="mt-3 inline-block bg-transparent border hover:text-red-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
              {" "}
              WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
