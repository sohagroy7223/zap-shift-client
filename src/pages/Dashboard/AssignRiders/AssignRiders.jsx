import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      return res.data;
    },
  });
  console.log(parcels);
  return (
    <div>
      <h3>Assign riders : {parcels.length}</h3>
      {
        // parcels.map(parcel=>)
      }
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created at</th>
              <th>Pickup District at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>$ {parcel.cost}</td>
                <td>{new Date(parcel.createdAt).toLocaleDateString()}</td>
                <td>{parcel.senderDistrict}</td>
                <td>
                  <button className="btn hover:btn-primary btn-sm text-secondary">
                    Assign Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignRiders;
