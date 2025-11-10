import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4 text-indigo-400"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-gray-300 mb-6 text-center max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist.  
        Let’s get you back on track.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Link
          to="/"
          className="bg-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
