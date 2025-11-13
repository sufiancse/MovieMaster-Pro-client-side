import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../hooks/useAxios";

const StatisticsSection = () => {
  const axios = useAxios();
  const [stats, setStats] = useState({ totalMovies: 0, totalUsers: 0 });

  useEffect(() => {
    const fetchingMoviesAndUsers = async () => {
      try {
        const movieData = await axios.get("/api/movies");
        const userData = await axios.get("/api/users");

        const totalData = {
          totalMovies: movieData.data.length,
          totalUsers: userData.data.length,
        };
        setTimeout(() => {
          setStats(totalData);
        }, [1000]);
      } catch {
        (err) => console.log(err);
      }
    };
    fetchingMoviesAndUsers();
  }, [axios]);

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-red-500">
          Platform Statistics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-white">
          {/* Total Movies */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-3 ">🎬 Total Movies</h3>
            <motion.p
              className="text-4xl font-bold text-yellow-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {stats.totalMovies}
            </motion.p>
          </motion.div>

          {/* Total Users */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:bg-gray-700 transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-3 ">👤 Total Users</h3>
            <motion.p
              className="text-4xl font-bold text-blue-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {stats.totalUsers}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default StatisticsSection;
