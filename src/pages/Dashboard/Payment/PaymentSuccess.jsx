import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useRef } from "react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();
  const called = useRef(false);
  // console.log(sessionId);

  useEffect(() => {
    if (sessionId && !called.current) {
      called.current = true;

      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
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
        <h3 className=" text-3xl font-bold">Payment successfully pay</h3>
        <br />
        <p>
          Your transaction id :
          <span className="font-bold">{paymentInfo.transactionId}</span>
        </p>
        <p>
          your Tracking id :
          <span className="font-bold">{paymentInfo.trackingId}</span>
        </p>
        <br />
        <img className="rounded-full w-30 h-30" src="/success.png" alt="" />
      </div>
    </div>
  );
};

export default PaymentSuccess;
