import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AllMovies from "../pages/AllMovies";
import MyCollections from "../pages/MyCollections";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-movies",
        Component: AllMovies,
      },
      {
        path: "/my-collections",
        Component: MyCollections,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
