import { Marker } from "react-map-gl/maplibre";
import PropTypes from "prop-types";
import styles from "./ReportesMarkers.module.css";
import Icons from "../iconos/Icons";

const ReportesMarkers = ({
  reportesPin,
  setPopupInfo,
  setMarker,
  selected,
}) => {
  const renderMarker = (reportes) => {
    const { properties, geometry } = reportes;
    const { Contador, Nombre, Ciudad, Fecha, cronica, policia_involucrado } =
      properties;
    const { coordinates } = geometry;
    const [longitude, latitude] = coordinates;

    const reportesStyle = `${styles.reportes} ${selected === Contador ? styles.selected : "selected"}`;

    const safeNombre = Nombre || "sin datos";
    const safeCiudad = Ciudad || "sin datos";
    const safeCronica = cronica || "sin datos";
    const safePolicia = policia_involucrado || "sin datos";
    const safeFecha = Fecha || "sin datos";

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
            title: `${safeNombre}`,
            date: `${safeFecha}`,
            circs: `${safeCronica}`,
            description: `Nombre: ${safeNombre}, Ciudad: ${safeCiudad}`,
            caseId: `${Contador}`, // Este será el ID para el enlace
            autority: `${safePolicia}`,
          });
        }}
      >
        <Icons icon={"reportes"} className={reportesStyle} iconSize={"1rem"} />
      </Marker>
    );
  };

  return <>{reportesPin.features.map((reportes) => renderMarker(reportes))}</>;
};

ReportesMarkers.propTypes = {
  reportesPin: PropTypes.object.isRequired,
  setPopupInfo: PropTypes.func.isRequired,
  setMarker: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default ReportesMarkers;
