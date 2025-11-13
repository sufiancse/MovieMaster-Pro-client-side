

import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/Loading";
import toast from "react-hot-toast";
import FilterBar from "../components/FilterBar";

const AllMovies = () => {
  const axios = useAxios();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchMovies = async (filters = {}) => {
    setLoading(true);
    try {
      const genreQuery = filters.genres?.join(",") || "";
      const query = new URLSearchParams({
        genres: genreQuery,
        minRating: filters.minRating || "",
        maxRating: filters.maxRating || "",
      });

      const { data } = await axios.get(`/api/movies?${query.toString()}`);
      setMovies(data);
    } catch (error) {
      toast.error("Failed to fetch movies!");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchMovies();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto mt-20 md:mt-5 mb-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Enjoy All Movies</h2>

      <FilterBar onFilterChange={fetchMovies} />

      {movies.length === 0 ? (
        <p className="text-center text-gray-500">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllMovies;
