import { Link, NavLink } from "react-router-dom";
import defaultPic from "../../../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => console.log("logut successfully"))
      .catch((error) => console.error(error));
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">Login</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-[#706F6F] font-semibold">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="avatar">
            <div className="w-11 rounded-full">
              <img src={defaultPic} />
            </div>
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-[#403F3F] text-white h-11 w-36"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/login"}
              className="btn bg-[#403F3F] text-white h-11 w-36"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
