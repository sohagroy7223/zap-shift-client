import React from "react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" />
      <h3 className="font-bold text-2xl -ms-3">ZapShip</h3>
    </div>
  );
};

export default Logo;
