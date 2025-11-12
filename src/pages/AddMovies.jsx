import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router";
import LoadingSpinner from "../components/Loading";
import toast from "react-hot-toast";

const AddMovies = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      genre: e.target.genre.value,
      releaseYear: Number(e.target.releaseYear.value),
      director: e.target.director.value,
      cast: e.target.cast.value,
      rating: Number(e.target.rating.value),
      duration: Number(e.target.duration.value),
      plotSummary: e.target.plotSummary.value,
      posterUrl: e.target.posterUrl.value,
      language: e.target.language.value,
      country: e.target.country.value,
      addedBy: user?.email,
    };

    try {
      const data = await axios.post("/movies", formData);

      if (data.data.insertedId) {
        toast.success("Movie successfully added.");
        setTimeout(() => {
          setLoading(true);
          navigate("/movies");
        }, 1200);
      } else {
        toast.error("Movie not added.");
      }
    } catch (err) {
      toast.error("Add movie error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  p-6">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl  rounded-xl shadow-2xl p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold  text-center mb-4">
            🎬 Add Movie - MovieMaster Pro
          </h2>

          {/* Title */}
          <div>
            <label className="block text-sm font-semibold  mb-1">
              Title<span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Enter movie title"
              required
            />
          </div>

          {/* Genre & Release Year */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Genre<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="genre"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="e.g. Sci-Fi"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Release Year<span className=" text-red-600">*</span>
              </label>
              <input
                type="number"
                name="releaseYear"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="2010"
              />
            </div>
          </div>

          {/* Director & Cast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Director<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="director"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Director name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Cast<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="cast"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Main actors"
              />
            </div>
          </div>

          {/* Rating & Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Rating<span className=" text-red-600">*</span>
              </label>
              <input
                type="number"
                step="0.1"
                name="rating"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="e.g. 8.8"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Duration (minutes)<span className=" text-red-600">*</span>
              </label>
              <input
                type="number"
                name="duration"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="148"
              />
            </div>
          </div>

          {/* Plot Summary */}
          <div>
            <label className="block text-sm font-semibold  mb-1">
              Plot Summary<span className=" text-red-600">*</span>
            </label>
            <textarea
              name="plotSummary"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows="4"
              placeholder="Enter plot summary..."
            ></textarea>
          </div>

          {/* Poster URL */}
          <div>
            <label className="block text-sm font-semibold  mb-1">
              Poster URL<span className=" text-red-600">*</span>
            </label>
            <input
              type="url"
              name="posterUrl"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="https://example.com/poster.jpg"
            />
          </div>

          {/* Language & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Language<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="language"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="English"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold  mb-1">
                Country<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                name="country"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="USA"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="  btn-primary text-white py-3 px-5 rounded-lg font-semibold  transition-colors duration-300"
            >
              Add Movie
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddMovies;
