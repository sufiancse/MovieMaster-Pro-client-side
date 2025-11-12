import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen transition-colors duration-500 bg-gray-100 dark:bg-[#0f0f14]">

      <motion.div
        className="relative flex justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-indigo-500 dark:border-t-cyan-400 shadow-xl shadow-indigo-400/40 dark:shadow-cyan-500/20"></div>

        <motion.div
          className="absolute w-4 h-4 rounded-full bg-indigo-500 dark:bg-cyan-400"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>

      <motion.p
        className="mt-8 text-gray-700 dark:text-gray-200 text-lg font-semibold tracking-wide"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Please wait a moments...
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
