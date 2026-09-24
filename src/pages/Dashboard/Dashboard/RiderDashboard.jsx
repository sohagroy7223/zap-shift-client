import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const RiderDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: deliveryData = [] } = useQuery({
    queryKey: ["delivery-per-day", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders/delivery-per-day?email=${user.email}`,
      );

      return res.data;
    },
    enabled: !!user?.email,
  });

  console.log(deliveryData);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        My Daily Delivery: {deliveryData.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>date</th>
              <th>delivery</th>
            </tr>
          </thead>
          <tbody className="  ">
            {deliveryData.map((data, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{data.date}</td>
                <td>{data.parcelDelivered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap w-full mt-10">
        <BarChart width={700} height={400} data={deliveryData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="date" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="parcelDelivered" fill="#0088FE" />
        </BarChart>
      </div>
    </div>
  );
};

export default RiderDashboard;
