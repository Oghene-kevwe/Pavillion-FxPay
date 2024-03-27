import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  function onLogin(e) {
    e.preventDefault();
  }

  const navigate = useNavigate();

  return (
    <section className=" px-[2vw]">
      <div className="  flex justify-center items-center flex-col gap-4">
        <form
          onSubmit={onLogin}
          className=" bg-white shadow-md rounded-md px-4 border w-[80%] md:w-[50%] lg:w-[30%] pb-8  "
        >
          <p className=" font-bold bg-primaryYellow text-white text-center text-xl rounded-md py-4 -mt-2">
            Login
          </p>
          {/* form details */}
          <div className=" flex flex-col gap-6 mt-8">
            {/* User Name */}
            <div>
              <label>Username</label>
              <div className=" h-8">
                <input
                  type="text"
                  className=" pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Username"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label>Password</label>
              <div className=" h-8">
                <input
                  type="text"
                  className="pl-2 h-full w-full outline outline-1 outline-gray-300 rounded-sm focus:outline-primaryYellow placeholder:text-sm "
                  placeholder="Enter Password"
                />
              </div>
            </div>
          </div>
          {/* login button */}
          <button
            onClick={() => navigate("/dashboard")}
            className=" shadow-md buttonBgColor text-white mt-12 mx-auto py-4 w-full"
          >
            Login
          </button>
          {/* Signup link */}
          <div className=" mt-8">
            <p className=" text-sm">
              Don't have an account?{" "}
              <Link to={"/signup"} className=" font-bold text-primaryYellow">
                click here
              </Link>{" "}
              to sign up.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
