import { Link } from "react-router";
// import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MovieCard = ({ movie }) => {
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()

  const handleWatchList = async() => {
    try{
      const {data} = await axiosSecure.post('/movies/watch-list', {...movie, watchList_by: user.email})
      if(data.insertedId){
        toast.success(`"${movie.title}" movie added in the watch list successfully.`)
      }
    
    }
    catch(err){
      const v = err.status
      if(v == 500){
        toast.error(`"${movie.title}" movie already added in the watch list`)
      }
      else{
        toast.error(err.message)
      }
      
    }
  }
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
            <button onClick={handleWatchList} className="mt-3 inline-block bg-transparent border hover:text-red-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
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
