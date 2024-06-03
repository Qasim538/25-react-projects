import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-grey-800 font-semibold">
            <Link to={'/'}>
            <li className="cursor-pointer">Home</li>
            </Link>
            <Link to={'/cart'}>
            <li className="cursor-pointer mr-5">Cart</li>
            </Link>
        </ul>
      </nav>
  );
};

export default Header;
