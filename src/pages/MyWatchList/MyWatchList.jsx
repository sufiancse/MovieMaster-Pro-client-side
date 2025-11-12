import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Loading";
import MyWatchListCard from "./MyWatchListCard";

const MyWatchList = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchingWatchListData = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/movies/watch-list?email=${user.email}`
        );
        setMovies(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (user?.email) fetchingWatchListData();
  }, [user?.email]);

  const deleteFromUI = (id) => {
    setMovies((prev) => prev.filter(movie => movie._id !== id))
  }

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto my-10 px-4 mt-20 md:mt-5">
      <h2 className="text-3xl font-bold mb-6 text-red-500">
        My Watch List ({movies.length})
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {movies.length > 0 && loading === false ? (
          movies.map((movie) => (
            <MyWatchListCard
              key={movie._id}
              movie={movie}
              deleteFromUI={deleteFromUI}
            />
          ))
        ) : (
          <p className="text-center my-10 col-span-3 text-gray-500 font-bold text-2xl">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyWatchList;
