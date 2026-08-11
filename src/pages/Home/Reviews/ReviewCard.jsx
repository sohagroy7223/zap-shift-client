import React from "react";
import image from "../../../assets/reviewQuote.png";

const ReviewCard = ({ review }) => {
  console.log(review);
  const {
    review: description,
    user_photoURL,
    userName,
    user_email,
    ratings,
    date,
  } = review;
  return (
    <div className="border p-5 rounded-2xl space-y-3">
      {/*  */}
      <div className="md:flex items-center gap-4">
        <img className="rounded-full md:w-13 w-8" src={user_photoURL} alt="" />
        <div className="md:text-sm text-xs">
          <b>{userName}</b>
          <p>{user_email}</p>
        </div>
      </div>
      <p className="md:px-10">{description}</p>
      <div className="md:flex justify-around items-center">
        <b>rating: {ratings}</b>
        <p>{new Date(date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
