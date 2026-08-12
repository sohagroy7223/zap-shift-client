import image from "../../../assets/customer-top.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { use } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }) => {
  return (
    <div className="space-y-10">
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>
      <div className="md:w-3xl mx-auto text-center">
        <h3 className=" md:text-2xl text-lg text-center font-bold px-3">
          What Our Customers are Sayings
        </h3>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "20%",
          depth: 100,
          modifier: 1,
          scale: 0.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
