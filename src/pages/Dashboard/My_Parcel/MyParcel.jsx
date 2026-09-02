import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdOutlineSearch } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();

  const axiosInstance = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handelDeleteParcel = (id) => {
    console.log("delete this data", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/parcels/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

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
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-400 btn btn-sm">Paid</span>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-primary text-secondary btn-sm"
                    >
                      Pay
                    </Link>
                  )}
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td className="flex gap-2">
                  <button className="btn btn-square hover:bg-primary">
                    <MdOutlineSearch size={25} />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => handelDeleteParcel(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <RiDeleteBinLine size={18} />
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

export default MyParcel;
