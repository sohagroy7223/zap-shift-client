import React from "react";

const PaymentSuccess = () => {
  return (
    <div>
      <div className=" h-screen text-center mx-auto flex flex-col items-center justify-center">
        <h3 className=" text-3xl font-bold">Payment successfully pay</h3>
        <img className="rounded-full w-30 h-30" src="/success.png" alt="" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
