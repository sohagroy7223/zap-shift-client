import React from "react";
import location from "../../../assets/location-merchant.png";
import bgImage from "../../../assets/be-a-merchant-bg.png";

const Priority = () => {
  return (
    <div className="relative">
      <div className="absolute">
        <img src={bgImage} alt="" />
      </div>
      <div className="bg-secondary text-white rounded-3xl md:flex p-5 items-center space-y-2.5">
        <div className="md:w-6/12 space-y-4">
          <h3 className="md:text-2xl text-xl text-center md:text-start font-bold ">
            Merchant and Customer Satisfaction is Our First Priority
          </h3>
          <p className="md:text-md text-sm">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="flex gap-2 ">
            <button className="btn btn-sm bg-primary md:rounded-3xl">
              Become a Merchant
            </button>
            <button className=" btn btn-sm hover:bg-primary md:rounded-3xl">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>
        <div>
          <img className="w-132" src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Priority;
