import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const RiderDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: delivered_parcels = [] } = useQuery({
    queryKey: ["rider-delivery-par-day", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders/delivery-per-day?email=${user.email}`,
      );
      return res.data;
    },
  });

  return (
    <div>
      <h3>Rider delivered parcels: {delivered_parcels.length}</h3>
    </div>
  );
};

export default RiderDashboard;
