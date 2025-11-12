import { motion } from "framer-motion";
import { Film, Lock } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser, setLoading, googleSignin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const clickFrom = location.state?.from || "/";

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        setLoading(false);
        setUser(result.user);
        toast.success("Login Successful.");

        navigate(clickFrom, { replace: true });
      })
      .catch((err) => {
        toast.error("Google login error: ", err.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
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
            MovieMaster Pro Login
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
              name="email"
              placeholder="you@example.com"
              required
              className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
              className="w-full bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-primary transition-all font-semibold text-white py-2 rounded-lg flex items-center justify-center cursor-pointer"
          >
            <Lock className="w-4 h-4 mr-2" /> Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-600"></div>
          <span className="mx-2 text-gray-400 text-sm">OR</span>
          <div className="grow border-t border-gray-600"></div>
        </div>

        {/* Google Login Button */}
        <button
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 hover:bg-gray-100 transition-colors py-2 rounded-lg font-semibold cursor-pointer"
          onClick={handleGoogleSignin}
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
          <Link
            to="/register"
            state={{ from: location.state?.from }}
            className="text-pink-500 hover:underline cursor-pointer"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
