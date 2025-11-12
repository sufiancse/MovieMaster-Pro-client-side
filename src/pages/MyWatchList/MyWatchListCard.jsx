import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyWatchListCard = ({ movie, deleteFromUI }) => {
  const axiosSecure = useAxiosSecure();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/movies/watch-list/${movie._id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Movie has been deleted.",
              icon: "success",
            });
            deleteFromUI(movie._id);
          })
          .catch((err) =>
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            })
          );
      }
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between  dark:bg-base-content rounded-xl shadow p-4 mb-4 hover:shadow-md transition">
        <div className="flex items-center gap-4">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="w-20 h-28 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-gray-800">
              {movie.title}
            </h2>
            <span className="text-gray-500">{movie.releaseYear}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleDelete}
            className="flex items-center justify-center p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWatchListCard;
