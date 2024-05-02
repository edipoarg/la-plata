import { Marker } from "react-map-gl/maplibre";
import React, { useState, useEffect } from "react";
import { FaLocationPin } from "react-icons/fa6";

const Comisarias = (Gatillodata, setScreenData, setMarker, selected) => {
  return (
    <Marker
      key={id}
      longitude={coords.longitude}
      latitude={coords.latitude}
      onMouseEnter={() => setMarker(id)}
      onMouseLeave={() => setMarker(null)}
      onClick={() =>
        setPopupData({
          coords: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
          comisaria,
          exComisaria,
          direccion,
          comisario,
          cargo,
        })
      }
    >
      <FaLocationPin />
    </Marker>
  );
};

export default Comisarias;
