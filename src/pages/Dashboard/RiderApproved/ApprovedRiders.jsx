import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";

const ApprovedRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  console.log(riders);
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
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td>{rider.status}</td>
                <td>
                  <button className="btn btn-sm">
                    <FaUserCheck />
                  </button>
                  <button className="btn btn-sm">
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
