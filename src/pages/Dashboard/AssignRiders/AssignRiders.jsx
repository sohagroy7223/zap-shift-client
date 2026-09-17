import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignRiders = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);
  const axiosSecure = useAxiosSecure();
  const riderModalRef = useRef();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      // console.log("Rider response:", res.data);
      return res.data;
    },
  });

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`,
      );
      return res.data;
    },
  });

  const handelAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);

    riderModalRef.current.showModal();
  };

  return (
    <div>
      <h3>Assign riders : {parcels.length}</h3>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created at</th>
              <th>Pickup District</th>
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
                  <button
                    onClick={() => handelAssignRiderModal(parcel)}
                    className="btn hover:btn-primary btn-sm text-secondary"
                  >
                    Assign Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Riders: {riders.length}!</h3>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
