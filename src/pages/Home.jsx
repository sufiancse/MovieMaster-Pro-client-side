import HeroCarousel from "../components/HomePageComponents/HeroCarousel";
import GenreSection from "../components/HomePageComponents/GenreSection";
import AboutPlatform from "../components/HomePageComponents/AboutPlatform";
import StatisticsSection from "../components/HomePageComponents/StatisticsSection";
import TopRatedMovies from "../components/HomePageComponents/TopRatedSection/TopRatedMovies";
import RecentlyAdded from "../components/HomePageComponents/RecentMoviesSection/RecentlyAdded";

const Home = () => {
  
  return (
    <div >
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
