import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const colorMap = {
    "pending-pickup": "#0088FE",
    "delivery-assigned": "#FFBB28",
    "in-transit": "#00C49F",
  };

  const { data: deliveryState = [] } = useQuery({
    queryKey: ["delivery-status-status"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/status");
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

  //   console.log(deliveryState);

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
            <div className="stat-title">{state.status}</div>
            <div className="stat-value">{state.count}</div>
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
            data={getPiChartData(deliveryState)}
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

export default AdminDashboard;
