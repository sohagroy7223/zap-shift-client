import React from "react";
import services from "../../../assets/service.png";

const Services = () => {
  return (
    <div className="bg-secondary text-white rounded-lg">
      <div className="text-center p-9 space-y-3">
        <h3 className="text-2xl font-bold">Our Services</h3>
        <p className="md:w-8/12 mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 p-5 gap-3 ">
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Express & Standard Delivery</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Nationwide Delivery</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Fulfillment Solution</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Cash on Home Delivery</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Corporate Service / Contract In Logistics</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
          <div className=" flex flex-col space-y-3 border items-center p-4 rounded-2xl bg-white text-black hover:bg-primary duration-500">
            <img className="w-10 " src={services} alt="" />
            <b>Parcel Return</b>
            <p>
              We deliver parcels within 24-72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4-6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
