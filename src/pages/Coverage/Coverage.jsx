import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const data = useLoaderData();
  // console.log(data);
  const position = [23.685, 90.3563];
  return (
    <div className="space-y-5">
      <h3 className="md:text-5xl font-bold text-3xl">
        We are available in 64 districts
      </h3>
      {/* for search */}
      <div className="flex">
        <input className="border p-1" type="text" placeholder="search here" />
        <button className="btn bg-primary rounded-full">search</button>
      </div>
      {/* for map */}
      <div className="border  space-y-3 p-3">
        <h3 className="text-3xl font-bold">
          We deliver almost all over Bangladesh
        </h3>
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-120"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                {center.district} <br /> Service Area:{" "}
                {center.covered_area.join(", ")}.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
