import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 justify-between">
        <Link href="/" className="flex items-center font-bold text-xl">
          <span>
            <img src={logo} className="h-12 w-12 rounded-full mr-2" alt="" />
          </span>
          <span>Zahid Hasan</span>
        </Link>
        <ul className="flex gap-6 pr-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
