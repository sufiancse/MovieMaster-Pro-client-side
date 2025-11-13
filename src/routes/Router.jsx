import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AllMovies from "../pages/AllMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetailsCard from "../components/MovieDetailsCard/MovieDetailsCard";
import AddMovies from "../pages/AddMovies";
import UpdateMovie from "../components/UpdateMovie";
import PrivateRoute from "./PrivateRoute";
import MyCollections from "../pages/MyCollections/MyCollections";
import MyWatchList from "../pages/MyWatchList/MyWatchList";
import ErrorBoundary from "../pages/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorBoundary />,
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
        element: (
          <PrivateRoute>
            <MyCollections />,
          </PrivateRoute>
        ),
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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/movies/${params.id}`),
        Component: MovieDetailsCard,
      },
      {
        path: "/movies/update-movie/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/movies/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateMovie />,
          </PrivateRoute>
        ),
      },
      {
        path: "/movies/add-movies",
        element: (
          <PrivateRoute>
            <AddMovies></AddMovies>
          </PrivateRoute>
        ),
      },
      {
        path: "/movies/my-watch-list",
        element: (
          <PrivateRoute>
            <MyWatchList />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        Component: Error,
      },
      
    ],
  },
]);

export default router;
