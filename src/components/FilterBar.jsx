import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const FilterBar = ({ onFilterChange }) => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState("");
  const [maxRating, setMaxRating] = useState("");
  const axios = useAxios();

  useEffect(() => {
    axios.get("/api/movies")
      .then(({ data }) => {
        const uniqueGenres = [...new Set(data.map(movie => movie.genre))];
        setGenres(uniqueGenres);
      })
      .catch(err => console.error(err));
  }, []);

  const handleGenreChange = (genre) => {
    const updated = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
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
    setMinRating("");
    setMaxRating("");
    onFilterChange({ genres: [], minRating: "", maxRating: "" });
  };

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4 p-4  rounded-lg mb-6">
      
      <div className="flex flex-wrap gap-2">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => handleGenreChange(genre)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedGenres.includes(genre)
                ? "bg-red-600 border-blue-500"
                : "bg-gray-600 border-gray-600 hover:bg-gray-400 text-white"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      
      <div className="flex items-center gap-2 ml-auto mt-2 md:mt-0">
        <input
          type="number"
          placeholder="Min"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
          className="w-16 px-2 py-1 rounded border "
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Max"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
          className="w-16 px-2 py-1 rounded border "
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
