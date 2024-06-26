import { Marker } from "react-map-gl/maplibre";
import PropTypes from "prop-types";
import styles from "./DependenciasCabaMarkers.module.css";
import Icons from "../iconos/Icons";

const DependenciasMarkers = ({
  dependencias,
  setPopupInfo,
  setMarker,
  selected,
}) => {
  const renderMarker = (dependenciasCaba) => {
    const { properties, geometry } = dependenciasCaba;
    const { Contador, Nombre, Dirección, Teléfono } = properties;
    const { D_Coordenadas } = geometry;
    const [longitude, latitude] = D_Coordenadas;

    const dependenciasStyle = `${styles.dependencias} ${selected === Contador ? styles.selected : ""}`;

    return (
      <Marker
        key={Contador}
        longitude={longitude}
        latitude={latitude}
        onMouseEnter={() => setMarker(Contador)}
        onMouseLeave={() => setMarker(null)}
        onClick={() => {
          setMarker(Contador);
          setPopupInfo({
            coords: {
              lat: latitude,
              lng: longitude,
            },
            title: Nombre,
            description: `Dirección: ${Dirección}, Teléfono: ${Teléfono}`,
          });
        }}
      >
        <Icons
          icon={"dependencia"}
          className={dependenciasStyle}
          iconSize={"1.2rem"}
        />
      </Marker>
    );
  };

  return (
    <>
      {dependencias.features.map((dependenciasCaba) =>
        renderMarker(dependenciasCaba),
      )}
    </>
  );
};

DependenciasMarkers.propTypes = {
  dependencias: PropTypes.object.isRequired,
  setPopupInfo: PropTypes.func.isRequired,
  setMarker: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default DependenciasMarkers; // Corregir aquí el nombre del export
