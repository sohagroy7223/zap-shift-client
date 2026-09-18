import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "delivery_assign"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=delivery_assign`,
      );
      //   console.log(res.data);
      return res.data;
    },
  });

  const handelAcceptingParcel = (parcel) => {
    const updateStatus = { deliveryStatus: "rider-arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, updateStatus)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `thanks for accepting.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <h3>
        this is assign deliveries page:{" "}
        <span className="font-bold">{parcels.length}</span>
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>confirm</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "delivery_assign" ? (
                    <>
                      <button
                        onClick={() => handelAcceptingParcel(parcel)}
                        className="btn btn-sm text-black btn-success"
                      >
                        Accept
                      </button>
                      <button className="btn btn-sm text-black btn-warning ml-1.5">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>confirm</span>
                  )}
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignDeliveries;
