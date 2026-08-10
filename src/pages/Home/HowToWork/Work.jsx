import React from "react";
import icon from "../../../assets/bookingIcon.png";

const Work = () => {
  return (
    <div className="p-3 space-y-4">
      <h3 className="text-lg font-bold">How To Work</h3>

      <div>
        <div className="grid gap-3 md:grid-cols-3 grid-cols-2 lg:grid-cols-4">
          <div className="border rounded-xl p-4 space-y-4 bg-white hover:bg-primary duration-500">
            <img className="w-10" src={icon} alt="" />
            <b className="text-secondary">Booking Pick & Drop</b>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="border rounded-xl p-4 space-y-4 bg-white hover:bg-primary duration-500">
            <img className="w-10" src={icon} alt="" />
            <b className="text-secondary">Cash On Delivery</b>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="border rounded-xl p-4 space-y-4 bg-white hover:bg-primary duration-500">
            <img className="w-10" src={icon} alt="" />
            <b className="text-secondary">Delivery Hub</b>
            <p className="text-[#606060]">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="border rounded-xl p-4 space-y-4 bg-white hover:bg-primary duration-500">
            <img className="w-10" src={icon} alt="" />
            <b className="text-secondary">Booking SME & Corporate</b>
            <p className="text-[#606060] ">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
