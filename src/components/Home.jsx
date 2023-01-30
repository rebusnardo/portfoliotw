import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Ron Busnardo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          <Typed
            strings={[" Full Stack Developer"]}
            typeSpeed={100}
            showCursor={false}
          />
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          I'm a full stack developer specializing in building exceptional
          digital expierences. Currently I'm focused on building responsive full
          stack web applications
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
