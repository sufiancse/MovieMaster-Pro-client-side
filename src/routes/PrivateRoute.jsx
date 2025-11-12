import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate state={{from: location.pathname}} to={"/login"} replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
