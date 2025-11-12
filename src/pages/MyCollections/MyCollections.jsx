
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import MyCollectionCard from "./MyCollectionCard";

const MyCollections = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    const dataFetching = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/api/movies/my-collections?email=${user?.email}`
        );
        setMovies(data);
      } catch (err) {
        toast.error("data fetching error: ", err.message);
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) dataFetching();
  }, [user?.email]);

  const deleteFromUI = (id) => {
    setMovies((prev)=> prev.filter(m=> m._id !== id))
  }

  if (loading) <LoadingSpinner />;

  return (
    <div className="container mx-auto my-10 px-4 mt-20 md:mt-5">
      <h2 className="text-3xl font-bold mb-6 text-red-500">My Collections ({movies.length})</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.length > 0 && loading === false ? (
          movies.map(movie => <MyCollectionCard key={movie._id} movie={movie} deleteFromUI={deleteFromUI}/>)
        ) : (
          <p className="text-center my-10 col-span-3 text-gray-500 font-bold text-2xl">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyCollections;
