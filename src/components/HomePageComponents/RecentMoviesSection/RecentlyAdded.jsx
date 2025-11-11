import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import MovieCard from "../../MovieCard";

const RecentlyAdded = () => {
  const axios = useAxios()
const [recentMovies,setRecentMovies] = useState([])


  useEffect(() => {
    axios.get('/latest-movies')
    .then(data => setRecentMovies(data.data))
    .catch(error => console.log("Data fetching error: ", error))
  },[axios])


  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Recently Added</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {recentMovies.map((movie) => <MovieCard key={movie._id} movie={movie}/>)}
      </div>
    </div>
  );
};

export default RecentlyAdded;
