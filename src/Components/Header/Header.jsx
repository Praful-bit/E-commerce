// import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-16 pt-2 pb-2">
          <NavLink to="/home" className="text-xl" >
            Home
          </NavLink>
          <NavLink to="/" className="text-xl" >
            Store
          </NavLink>
          <NavLink to="/about" className="text-xl" >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
