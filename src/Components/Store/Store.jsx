/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Data } from "../Data/Data";
import ProductCard from "./ProductCard";



function Store() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl ">
        <Link to="/"></Link>
        <div className="bg-gray-500 text-white text-center pb-16">
          <h1 className="text-2xl sm:text-8xl font-medium ">The Generics</h1>
        </div>
        <div className="text-center text-3xl pt-10 font-bold">Music</div>
        <div className="grid grid-cols-2 gap-2 mx-52 mb-10">
          {Data.map((product, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold pt-16 text-center">
                Album {index + 1}
              </h3>
              <ProductCard key={index} product={product} />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Store