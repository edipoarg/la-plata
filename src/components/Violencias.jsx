import { Marker } from "react-map-gl/maplibre";
import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import styles from "../styles/Violencias.module.css";

export const Violencias = ({ data, setPopupData, setMarker, selected }) => {
  if (data === null) {
    // If data is null, render nothing or a loading indicator
    return null;
  }

  return (
    <>
      {data.map((event) => {
        const {
          id,
          coords,
          fecha,
          hora,
          direccion,
          barrio,
          titulo,
          tipo,
          fuerza,
          cronica,
          link,
          video,
        } = event;
        const markerStyle = `marker ${id === selected ? "hovered" : ""} ${tipoIdStyles[tipoId]}`;

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
                fecha,
                hora,
                direccion,
                barrio,
                titulo,
                tipo,
                fuerza,
                cronica,
                link,
                video,
              })
            }
          >
            <FaLocationPin className={styles.violenciaT1} />
          </Marker>
        );
      })}
    </>
  );
};
