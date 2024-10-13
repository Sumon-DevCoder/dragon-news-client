import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Header from "../shared/Header/Header";
import RightSideNav from "../home/RightSideNav";

const NewsDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">{id}</div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
