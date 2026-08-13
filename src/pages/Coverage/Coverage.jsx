import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null);
  const position = [23.685, 90.3563];

  const handelSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      // console.log(district, coord);
      mapRef.current.flyTo(coord, 12);
    }
  };
  return (
    <div className="space-y-5">
      <h3 className="md:text-5xl font-bold text-3xl">
        We are available in 64 districts
      </h3>
      {/* for search */}
      <form onSubmit={handelSearch}>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            name="location"
            placeholder="Search"
          />
        </label>
      </form>
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
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenter.map((center, index) => (
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
