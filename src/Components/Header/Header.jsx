/* eslint-disable react/prop-types */

import { NavLink, useLocation } from "react-router-dom";
import Cart from "../Cart/Cart";

function Header({ setCartActive }) {
  const location = useLocation();
  const showCartButton = location.pathname === "/";
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center space-x-16 pt-2 pb-2">
          <NavLink
            to="/home"
            className="text-xl"
            onClick={() => setCartActive(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/"
            className="text-xl"
            onClick={() => setCartActive(true)}
          >
            Store
          </NavLink>
          <NavLink
            to="/about"
            className="text-xl"
            onClick={() => setCartActive(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contactUs"
            className="text-xl"
            onClick={() => setCartActive(false)}
          >
            Contact US
          </NavLink>
          {showCartButton && (
            <Cart className="text-lg border-2 border-teal-600 cursor-pointer text-white py-1 px-4 rounded inline-block justify-end" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
