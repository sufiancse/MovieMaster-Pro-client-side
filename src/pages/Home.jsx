import React from "react";
import HeroCarousel from "../components/HomePageComponents/HeroCarousel";
import TopRatedMovies from "../components/HomePageComponents/TopRatedMovies";
import RecentlyAdded from "../components/HomePageComponents/RecentlyAdded";
import GenreSection from "../components/HomePageComponents/GenreSection";
import AboutPlatform from "../components/HomePageComponents/AboutPlatform";
import useAuth from "../hooks/useAuth";
import StatisticsSection from "../components/HomePageComponents/StatisticsSection";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <HeroCarousel />
        <TopRatedMovies />
        <RecentlyAdded />
        <GenreSection />
      </div>
      <AboutPlatform />
      <div className="container mx-auto">
        <StatisticsSection />
      </div>
    </div>
  );
};

export default Home;
