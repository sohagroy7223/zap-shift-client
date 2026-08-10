import React from "react";
import { motion } from "framer-motion";

import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import monster from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const Brand = () => {
  const brands = [amazon, casio, monster, randstad, star, start_people];

  return (
    <section className=" space-y-5">
      <h2 className="md:text-2xl text-lg text-center font-bold px-3">
        We've helped thousands of sales teams
      </h2>

      <div className="relative overflow-hidden ">
        <motion.div
          className="flex w-max items-center gap-16"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex h-15 w-40 shrink-0 items-center justify-center rounded-2xl bg-white p-6 shadow-sm"
            >
              <img
                src={brand}
                alt="company logo"
                className=" max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
