import logo from "../../../assets/images/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <div className="mt-10">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <p className="mt-5 text-[#706F6F]">Journalism Without Fear or Favour</p>
      <p className="mt-2.5 text-[#706F6F]">
        {moment().format("dddd MMMM DD YYYY")}
      </p>
    </div>
  );
};

export default Header;
