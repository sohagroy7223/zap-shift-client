import React from "react";
import { useParams } from "react-router";

const ParcelTrack = () => {
  const { trackingId } = useParams();

  return (
    <div>
      <h3 className="text-3xl font-bold">Track your Package: {trackingId}</h3>
    </div>
  );
};

export default ParcelTrack;
