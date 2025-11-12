import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import MovieCard from "../components/MovieCard";
import LoadingSpinner from "../components/Loading";
import toast from "react-hot-toast";

const AllMovies = () => {
  const axios = useAxios();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then((data) => {
        setMovies(data.data);
        setLoading(false);
      })
      .catch((error) => toast.error("data fetching error: ", error));
  }, [axios]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto mt-20 md:mt-5 mb-10 px-4 ">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Enjoy All Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
