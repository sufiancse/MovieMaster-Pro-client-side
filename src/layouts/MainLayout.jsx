import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1  md:pt-15">
        {/* Background Gradient Lights */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 opacity-30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 opacity-30 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
