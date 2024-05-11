// import React from "react";
import { Link } from "react-router-dom";
import HomeList from "./HomeList";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Link to="/home"></Link>
      <div className="bg-gray-500 text-white text-center">
        <h1 className="text-2xl sm:text-8xl font-medium py-8">The Generics</h1>
        <div className="py-8 px-8 border-2 border-emerald-500 inline-block">
          <p className="text-2xl select-none" style={{ userSelect: "none" }}>
            Get Our Latest Album
          </p>
        </div>
        <div className="flex justify-center items-center mt-4 pb-2">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-500 rounded-full border-4 border-emerald-500">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3l14 9-14 9V3z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="text-black text-center font-serif text-3xl ">TOURS</h3>
      <HomeList/>
    </div>
  );
}

export default Home;
