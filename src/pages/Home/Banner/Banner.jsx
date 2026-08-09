import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from "../../../assets/banner/banner3.png";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
      <div className="relative">
        <img src={banner1} />
        <div className="w-6/12 top-88 left-10 absolute z-10 translate-y-1/2">
          <div className="flex gap-3">
            <button className="btn bg-primary">Track Your Parcel</button>
            <button className="btn btn-outline  hover:bg-primary">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={banner2} />
        <div className=" w-6/12 top-88 left-10 absolute z-10 translate-y-1/2">
          <div className="flex gap-3">
            <button className="btn bg-primary">Track Your Parcel</button>
            <button className="btn btn-outline  hover:bg-primary">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={banner3} />
        <div className="w-6/12 top-88 left-10 absolute z-10 translate-y-1/2">
          <div className="flex gap-3">
            <button className="btn bg-primary">Track Your Parcel</button>
            <button className="btn btn-outline  hover:bg-primary">
              Be A Rider
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
