import { Edit3, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

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

  if (loading) <LoadingSpinner />;

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-red-500">My Collections</h2>
      <div className="flex items-center justify-between  dark:bg-base-content rounded-xl shadow p-4 mb-4 hover:shadow-md transition">
        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co.com/7hKGs30/superman.jpg"
            alt="title"
            className="w-20 h-28 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">Movie Name</h2>
            <span className="text-gray-500">2024</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center justify-center p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <Edit3 size={18} />
          </button>
          <button className="flex items-center justify-center p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
