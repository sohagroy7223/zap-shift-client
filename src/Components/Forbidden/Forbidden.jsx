import { Lottie } from "lottie-react";
import React from "react";
import forbidden from "../../../src/assets/json/forbidden.json";
import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Lottie className="w-50 h-50" src={forbidden} autoplay loop></Lottie>
      <h1 className="text-3xl font-bold text-red-500">
        You Are Forbidden to Access This Page
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        Please contact the administrator if you believe this is an error.
      </p>
      <div className="my-3 space-x-3">
        <Link to="/" className="btn btn-primary text-black">
          Go to Home
        </Link>
        <Link className="btn btn-secondary" to="/dashboard/myParcels">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
