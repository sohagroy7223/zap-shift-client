import React from "react";
import { Link } from "react-router";

const PaymentCanceled = () => {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold ">
        payment is cancelled. <br /> please try again{" "}
      </h3>
      <Link to="/dashboard/myParcels">
        <button className="btn btn-primary text-secondary">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCanceled;
