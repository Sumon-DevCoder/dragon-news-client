import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] h-20 flex items-center my-8">
      <button className="btn btn-primary bg-[#D72050] text-white mx-5 border-none border">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={20}>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link to="/" className="mr-12">
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
