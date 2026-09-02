import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Components/Loading/Loading";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel = "" } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handelPayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    window.location.href = res.data.url;
    console.log(res.data);
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="px-5">
      <h2>
        please pay ${parcel.cost} for : {parcel.parcelName}
      </h2>
      <button
        onClick={handelPayment}
        className="btn btn-primary text-secondary btn-sm"
      >
        pay
      </button>
    </div>
  );
};

export default Payment;
