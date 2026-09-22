import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryState = [] } = useQuery({
    queryKey: ["delivery-status-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/status");
      return res.data;
    },
  });

  console.log(deliveryState);

  return (
    <div>
      <h3>Admin dashboard parcel: {deliveryState.length}</h3>

      <div className="stats shadow">
        {deliveryState.map((state) => (
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">{state._id}</div>
            <div className="stat-value">{state.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
