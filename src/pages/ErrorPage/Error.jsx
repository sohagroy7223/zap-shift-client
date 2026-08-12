import React from "react";
import image from "../../assets/errorPage.png";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-3 relative">
      <div
        onClick={handelNavigate}
        className="flex items-center gap-5 cursor-pointer bg-primary p-2 rounded-2xl"
      >
        <IoArrowBack size={25} />
        <h3 className=" font-bold">Back to Home</h3>
      </div>
      <img className="rounded-2xl" src={image} alt="" />
      <h3 className="text-3xl font-black absolute mt-85">
        This Page Not Found
      </h3>
    </div>
  );
};

export default Error;
