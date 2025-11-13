import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const FilterBar = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState(1);
  const [maxRating, setMaxRating] = useState(10);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/api/movies")
      .then(({ data }) => {
        const uniqueGenres = [...new Set(data.map((movie) => movie.genre))];
        setGenres(uniqueGenres);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleGenreChange = (genre) => {
    const updated = selectedGenres.includes(genre)
      ? selectedGenres.filter((g) => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(updated);
  };

  const applyFilter = () => {
    onFilterChange({
      genres: selectedGenres,
      minRating,
      maxRating,
    });
  };

  const clearFilter = () => {
    setSelectedGenres([]);
    setMinRating(1);
    setMaxRating(10);
    onFilterChange({ genres: [], minRating: 1, maxRating: 10 });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-gray-800 rounded-lg mb-6 text-white shadow-lg">
      <div className="flex flex-wrap gap-2 w-full md:w-auto">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreChange(genre)}
            className={`px-3 py-1 rounded-full border transition text-sm ${
              selectedGenres.includes(genre)
                ? "bg-blue-600 border-blue-400"
                : "bg-gray-700 border-gray-600 hover:bg-gray-600"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2  px-4 py-2 rounded-lg shadow-inner w-full md:w-auto justify-center md:justify-end">
        <span className="font-semibold text-yellow-400 whitespace-nowrap">
          Rating Filter:
        </span>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Min"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-16 px-2 py-1 rounded border border-gray-500 text-white"
        />
        <span className="text-gray-300">-</span>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Max"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
          className="w-16 px-2 py-1 rounded border border-gray-500 text-white"
        />
        <button
          onClick={applyFilter}
          className="ml-2 px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Apply
        </button>
        <button
          onClick={clearFilter}
          className="ml-2 px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
