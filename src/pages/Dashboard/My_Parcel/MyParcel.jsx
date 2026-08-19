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

  return (
    <div className="px-5">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td className="flex gap-2">
                  <button className="btn">Edit</button>
                  <button className="btn">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      ))
      <h3>my parcel component {parcels.length} </h3>
    </div>
  );
};

export default MyParcel;
