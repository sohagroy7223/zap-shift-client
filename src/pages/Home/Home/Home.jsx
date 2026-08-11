import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Work from "../HowToWork/Work";
import Services from "../OurServices/Services";
import Brand from "../Brand/Brand";
import Serve from "../Practical serv/Serve";
import Priority from "../Priority/Priority";
import Reviews from "../Reviews/Reviews";
import axios from "axios";

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("/reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="space-y-15">
      <Banner></Banner>
      <Work></Work>
      <Services></Services>
      <Brand></Brand>
      <Serve></Serve>
      <Priority></Priority>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};

export default Home;
