import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto bg-[#FAFDF0]">
      <div className="px-5 py-3">
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div>
          <Outlet></Outlet>
        </div>
        <div className="hidden md:block">
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
