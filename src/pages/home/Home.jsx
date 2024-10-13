import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../shared/NewsCard";
import LeftSideNav from "../shared/LeftSideNav";
import RightSideNav from "./RightSideNav";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* LeftSideNav */}
        <div>
          <LeftSideNav />
        </div>
        {/* middle content */}
        <div className="md:col-span-2 grid grid-cols-1 justify-items-center space-y-7">
          {news?.map((aNews) => (
            <NewsCard key={aNews._id} aNews={aNews} />
          ))}
        </div>
        {/* RightSideNav */}
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
