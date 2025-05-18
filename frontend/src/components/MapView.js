import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon for leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const defaultPosition = [-34.8451, -58.3941]; // Entre BA y Longchamps

function LocationMarker({ onAddMarker }) {
  useMapEvents({
    click(e) {
      onAddMarker(e.latlng);
    },
  });
  return null;
}

export default function MapView() {
  const [markers, setMarkers] = useState([
    { position: [-34.8451, -58.3941], description: "Bienvenido a la zona sur" },
  ]);

  const handleAddMarker = (latlng) => {
    const desc = prompt("Descripción del reporte:");
    if (!desc) return;
    setMarkers([...markers, { position: [latlng.lat, latlng.lng], description: desc }]);
  };

  return (
    <div style={{ height: "350px", width: "100%", margin: "20px auto" }}>
      <MapContainer center={defaultPosition} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onAddMarker={handleAddMarker} />
        {markers.map((m, i) => (
          <Marker key={i} position={m.position}>
            <Popup>{m.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
