import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();

  const axiosInstance = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  console.log(parcels);
  return (
    <div className="px-5">
      <h3>my parcel component {parcels.length} </h3>
    </div>
  );
};

export default MyParcel;
