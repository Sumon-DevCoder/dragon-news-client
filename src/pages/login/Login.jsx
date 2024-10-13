import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // auto reload stop
    e.preventDefault();

    // form data
    const form = new FormData(e.currentTarget);

    // field value
    const email = form.get("email");
    const password = form.get("password");

    // create user
    signIn(email, password)
      .then((result) => {
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="border-2">
        <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl ">
          <h2 className="text-center font-semibold text-2xl mt-7">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="enter your email address"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-success border-none text-white bg-[#403F3F]"
              >
                Login
              </button>
              <p className="font-semibold text-center mt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-[#FF8C47]" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
