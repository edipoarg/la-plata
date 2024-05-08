import { Marker } from "react-map-gl/maplibre";
import PropTypes from "prop-types";
import styles from "./DependenciasMarkers.module.css";
import Icons from "../iconos/Icons";

const DependenciasMarkers = ({
  dependencias,
  setPopupInfo,
  setMarker,
  selected,
}) => {
  const renderMarker = (dependencia) => {
    const { properties, geometry } = dependencia;
    const { Nombre, Dirección, Teléfono, Dependencia, autoridad, grado } =
      properties;
    const { coordinates } = geometry;
    const [longitude, latitude] = coordinates;

    const dependenciasStyle = `${styles.dependencias} ${selected === Nombre ? styles.selected : ""}`;

    return (
      <Marker
        key={Nombre}
        longitude={longitude}
        latitude={latitude}
        onMouseEnter={() => setMarker(Nombre)}
        onMouseLeave={() => setMarker(null)}
        onClick={() => {
          setMarker(Nombre);
          setPopupInfo({
            coords: {
              lat: latitude,
              lng: longitude,
            },
            title: Nombre,
            level: Dependencia,
            address: Dirección,
            phone: Teléfono,
            autority: autoridad,
            grade: grado,
            caseId: `${Nombre}`, // Este será el ID para el enlace
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
    <>{dependencias.features.map((dependencia) => renderMarker(dependencia))}</>
  );
};

DependenciasMarkers.propTypes = {
  dependencias: PropTypes.object.isRequired,
  setPopupInfo: PropTypes.func.isRequired,
  setMarker: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default DependenciasMarkers; // Corregir aquí el nombre del export
