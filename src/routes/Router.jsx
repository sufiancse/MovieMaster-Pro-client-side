import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AllMovies from "../pages/AllMovies";
import MyCollections from "../pages/MyCollections";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";
import AddMovies from "../pages/AddMovies";
import UpdateMovie from "../components/UpdateMovie";

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
        path: "/movies",
        Component: AllMovies,
      },
      {
        path: "/movies/my-collections",
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
      {
        path: "/movies/movie-details/:id",
        loader: ({params}) => fetch(`http://localhost:3000/api/movies/${params.id}`),
        Component: MovieDetailsCard,
      },
      {
        path: "/movies/update-movie/:id",
        loader: ({params}) => fetch(`http://localhost:3000/api/movies/${params.id}`),
        Component: UpdateMovie,
      },
      {
        path: "/movies/add-movies",
        Component: AddMovies,
      },
    ],
  },
]);

export default router;
