import { Outlet } from "react-router-dom";
import Header from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
