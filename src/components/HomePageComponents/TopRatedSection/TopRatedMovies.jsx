import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import TopRatedMovieCard from "./TopRatedMovieCard";
import LoadingSpinner from "../../Loading";

const TopRatedMovies = () => {
  const axios = useAxios();
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/top-rated-movies")
      .then((data) => {
        setTopRatedMovies(data.data);
        setLoading(false);
      })
      .catch((error) => console.log("data fetching error: ", error));
  }, [axios]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Top Rated Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRatedMovies.map((movie) => (
          <TopRatedMovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;
