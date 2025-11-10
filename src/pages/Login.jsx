import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempted:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  relative overflow-hidden mt-15">
    

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[380px] bg-gray-900/80 border border-gray-800 shadow-2xl rounded-2xl p-8 backdrop-blur-lg text-white"
      >
        <div className="flex flex-col items-center">
          <Film className="w-12 h-12 text-pink-500 mb-2" />
          <h1 className="text-2xl font-bold text-center tracking-wide">
            MovieMaster ProLogin
          </h1>
          <p className="text-gray-400 text-sm">
            Enter your credentials to continue
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary transition-all font-semibold text-white py-2 rounded-lg flex items-center justify-center"
          >
            <Lock className="w-4 h-4 mr-2" /> Login
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-600"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="grow border-t border-gray-600"></div>
        </div>

        {/* Google Login Button */}
        <button
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 hover:bg-gray-100 transition-colors py-2 rounded-lg font-semibold"
          onClick={() => alert("Google Login Clicked!")}
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        <p className="text-center mt-4 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-pink-500 hover:underline">
            Register
          </a>
        </p>
      </motion.div>
    </div>
  );
}

export default Login


