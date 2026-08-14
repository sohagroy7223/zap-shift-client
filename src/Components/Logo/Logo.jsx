import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end">
        <img src={logo} alt="" />
        <h3 className="font-bold md:text-2xl text-lg -ms-3">ZapShip</h3>
      </div>
    </Link>
  );
};

export default Logo;
