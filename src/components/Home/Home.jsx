import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Home/Home.css";
import BannerImg from "../Home/HomeImg/Rectangle1.png";

const Home = () => {
  return (
    <div className="hero-area ">
      <div className="overlay"></div>
      <div className="sticky top-0">
        <Navbar></Navbar>
      </div>
      {/* <div className="top-0 absolute w-full right-0 bg-transparent h-64 z-10 left-0">
        <img src={BannerImg} alt="" />
      </div> */}
    </div>
  );
};

export default Home;
