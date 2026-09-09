import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";

const ApprovedRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handelUpdateRiders = (id, status) => {
    const updateInfo = { status: `${status}` };
    axiosSecure.patch(`/riders/${id}`, updateInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handelApprovedRider = (id) => {
    handelUpdateRiders(id, "approved");
  };
  const handelRejectsRider = (id) => {
    handelUpdateRiders(id, "rejected");
  };

  return (
    <div>
      <h3>Rider pending approved page : {riders.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td
                  className={`${rider.status === "approved" ? "text-green-700" : "text-yellow-500"}`}
                >
                  {rider.status}
                </td>
                <td>
                  <button
                    onClick={() => handelApprovedRider(rider._id)}
                    className="btn btn-sm"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handelRejectsRider(rider._id)}
                    className="btn btn-sm"
                  >
                    <IoPersonRemove />
                  </button>
                  <button className="btn btn-sm">
                    <FaTrashAlt />
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

export default ApprovedRiders;
