import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <div className=" h-screen text-center mx-auto flex flex-col items-center justify-center">
        <p>
          Your transaction id :
          <span className="font-bold">{paymentInfo.transactionId}</span>
        </p>
        <p>
          your Tracking id :
          <span className="font-bold" s>
            {paymentInfo.trackingId}
          </span>
        </p>
        <h3 className=" text-3xl font-bold">Payment successfully pay</h3>

        <img className="rounded-full w-30 h-30" src="/success.png" alt="" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
