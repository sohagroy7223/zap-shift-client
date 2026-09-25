import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const UserDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["parcels-delivery-status", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const colorMap = {
    "pending-pickup": "#0088FE",
    "delivery-assigned": "#FFBB28",
    "in-transit": "#00C49F",
  };

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels-delivery-status"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/delivery-status/status`);
      return res.data;
    },
  });
  const getPiChartData = (data) => {
    return data.map((item) => {
      return {
        name: item.status,
        value: item.count,
        fill: colorMap[item.status] || "#8884D8",
      };
    });
  };

  return (
    <div>
      <h3>user Dashboard :{users.length}</h3>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Total send Parcels</div>
          <div className="stat-value">{users.length}</div>
        </div>
      </div>

      <br />

      <div className="stats shadow">
        {parcels.map((parcel) => (
          <div key={parcel._id} className="stat place-items-center">
            <div className="stat-title">{parcel.status}</div>
            <div className="stat-value">{parcel.count}</div>
          </div>
        ))}
      </div>

      {/* pi chart */}
      <div className="w-full h-100">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={getPiChartData(parcels)}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            label
            isAnimationActive={true}
          />
          <Tooltip></Tooltip>
          <Legend></Legend>
          <RechartsDevtools />
        </PieChart>
      </div>
    </div>
  );
};

export default UserDashboard;
