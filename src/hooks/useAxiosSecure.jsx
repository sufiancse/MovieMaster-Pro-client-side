import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "https://movei-master-pro-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  // set token in the header for all the api call using useAxiosSecure hook
  instance.interceptors.request.use((config) => {
    // console.log(config);
    // config.headers.authorization = `Bearer ${user.accessToken}`
    // return config;
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    } else {
      // user null হলে token না পাঠানো
      config.headers.authorization = "";
    }
    return config;
  });

  return instance;
};
export default useAxiosSecure;
