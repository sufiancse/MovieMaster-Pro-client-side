import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold text-gray-700 mb-2">404</h1>
      <p className="font-medium text-gray-500 mb-3">OPPS! Page Not Found</p>
      <Link to={'/'} className="btn btn-primary">Back To Home</Link>
    </div>
  );
};

export default Error;
