import React, { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    // auto reload stop
    e.preventDefault();

    // form data
    const form = new FormData(e.currentTarget);

    // field value
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="border-2">
        <div className="card bg-base-100 max-w-lg shrink-0 shadow-2xl ">
          <h2 className="text-center font-semibold text-2xl mt-7">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="enter your photo URL"
                className="input input-bordered"
                required
                name="photoUrl"
              />
            </div>
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
            <div className="flex items-center mt-2 ml-1">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ms-2 text-sm font-medium"
              >
                Accept{" "}
                <span className="text-[#706F6F] font-semibold">
                  Term & Conditions
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success border-none text-white bg-[#403F3F]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
