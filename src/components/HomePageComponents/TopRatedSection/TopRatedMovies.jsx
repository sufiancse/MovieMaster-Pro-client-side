import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import TopRatedMovieCard from "./TopRatedMovieCard";



const TopRatedMovies = () => {
  const axios = useAxios()
  const [topRatedMovies, setTopRatedMovies] = useState([])

  useEffect(() => {
    axios.get('/top-rated-movies')
    .then(data => setTopRatedMovies(data.data))
    .catch(error => console.log("data fetching error: ", error))
  },[axios])

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        Top Rated Movies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {topRatedMovies.map((movie) => <TopRatedMovieCard key={movie._id} movie={movie} />)}
      </div>
    </div>
  );
};

export default TopRatedMovies;
