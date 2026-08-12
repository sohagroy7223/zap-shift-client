import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [23.685, 90.3563];
  return (
    <div>
      <h3 className="md:text-5xl font-bold text-3xl">
        We are available in 64 districts
      </h3>
      {/* for search */}
      <div></div>
      {/* for map */}
      <div className="border h-100">
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={true}
          className="h-100"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
