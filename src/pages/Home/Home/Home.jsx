import React from "react";
import Banner from "../Banner/Banner";
import Work from "../HowToWork/Work";
import Services from "../OurServices/Services";
import Brand from "../Brand/Brand";

const Home = () => {
  return (
    <div className="space-y-15">
      <Banner></Banner>
      <Work></Work>
      <Services></Services>
      <Brand></Brand>
    </div>
  );
};

export default Home;
