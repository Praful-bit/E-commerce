// import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="/about"></Link>
      <div className="bg-gray-500 pb-10 h-40">
        <h1 className="text-6xl font-serif mb-4 text-white font-bold pt-1  text-center">
          The Generics
        </h1>
      </div>
      <h2 className="text-4xl pt-1 font-bold font-serif text-center mb-4">About</h2>
      <div className="flex w-full mx-auto">
        <div className="w-1/2 p-4">
          <img
            src="https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="#"
            className="w-full rounded-full"
          />
        </div>
        <div className="w-1/2 p-4 mt-20 ">
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur rebates. The distinction,
            that arise from or to. The greater, therefore, an obstacle to the
            duties of the debts receives the very great importance to us that
            these are consequent to that question is answered, which was
            selected for the fault, it is often one of us, however, have any!
            Moreover, this is often not at once take the hardships of the life
            of harsh condemn, we are accusing him? Him whom something large.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
