// import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <Link to="/home"></Link>
      <div className="bg-gray-500 text-white text-center">
        <h1 className="text-2xl sm:text-8xl font-medium py-8">The Generics</h1>
        <div className="py-8 px-8 border-2 border-emerald-500 inline-block">
          <p className="text-2xl select-none" style={{ userSelect: 'none' }}>Get Our Latest Album</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
