import React from "react";
import Logo from "../../assets/images/logo.png";
import "../Home/Home.css";

const Navbar = () => {
  return (
    <div className="top-0 fixed left-0 right-0">
      <div className="navbar bg-transparent  flex justify-around items-center">
        <div className="">
          <a className=" normal-case ">
            <img className="w-24 " src={Logo} alt="" />
          </a>
        </div>

        <div className="form-control">
          <form>
            <div className="relative  ">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="search"
                className="py-2 border-2 w-72 text-sm text-black rounded-md pl-10 focus:outline-none focus:bg-white "
                placeholder="Search Your Destination...."
                autoComplete="off"
              />
            </div>
          </form>
        </div>

        <div className="hidden sm:flex sm:items-center text-white">
          <a href="#" className=" text-sm font-semibold mr-4">
            News
          </a>
          <a href="#" className=" text-sm font-semibold mr-4">
            Destination
          </a>
          <a href="#" className=" text-sm font-semibold mr-4">
            Blog
          </a>
          <a href="#" className=" text-sm font-semibold">
            Contact
          </a>
          <button className="px-5 ml-6 text-black rounded-md py-1 bg-[#F9A51A]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
