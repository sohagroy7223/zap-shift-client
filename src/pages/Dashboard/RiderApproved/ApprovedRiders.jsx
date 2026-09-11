import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";

const ApprovedRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [riderDetails, setRiderDetails] = useState([]);
  const modalRef = useRef(null);

  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "approved"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handelUpdateRiders = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      refetch();
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Rider status set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handelApprovedRider = (rider) => {
    handelUpdateRiders(rider, "approved");
  };
  const handelRejectsRider = (rider) => {
    handelUpdateRiders(rider, "rejected");
  };

  const handelDeleteRider = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };

  const openModal = (rider) => {
    setRiderDetails(rider);
    modalRef.current.showModal(rider);
  };

  return (
    <div>
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          Name: {riderDetails.name} <br />
          Email: {riderDetails.email} <br />
          driving: {riderDetails.driving} <br />
          address: {riderDetails.address} <br />
          region: {riderDetails.region} <br />
          riderNID: {riderDetails.riderNID} <br />
          BikeModel: {riderDetails.brandModel} <br />
          registerNumber: {riderDetails.registerNumber} <br />
          Instruction: {riderDetails.Instruction} <br />
          status: {riderDetails.status} <br />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
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
                  className={`${
                    rider.status === "approved"
                      ? "text-green-700 font-semibold"
                      : rider.status === "rejected"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-400 font-semibold"
                  }`}
                >
                  {rider.status}
                </td>

                <td className="flex gap-1">
                  <button
                    onClick={() => openModal(rider)}
                    className="btn btn-sm tooltip hover:btn-primary duration-400"
                    data-tip="View Rider"
                  >
                    <FaEye className="text-black" />
                  </button>
                  <button
                    onClick={() => handelApprovedRider(rider)}
                    className="btn btn-sm tooltip hover:btn-primary duration-400"
                    data-tip="Approved Rider"
                  >
                    <FaUserCheck className="text-black" />
                  </button>
                  <button
                    onClick={() => handelRejectsRider(rider)}
                    className="btn btn-sm tooltip hover:btn-primary duration-400"
                    data-tip="Rejected Rider"
                  >
                    <IoPersonRemove className="text-black" />
                  </button>
                  <button
                    onClick={() => handelDeleteRider(rider._id)}
                    className="btn btn-sm tooltip hover:btn-primary duration-400"
                    data-tip="Delete Rider"
                  >
                    <FaTrashAlt className="text-black" />
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
