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
    const { Contador, Nombre, Ciudad, Edad, cronica, policia_involucrado } =
      properties;
    const { coordinates } = geometry;
    const [longitude, latitude] = coordinates;

    const reportesStyle = `${styles.reports} ${selected === Contador ? styles.selected : ""}`;

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
            title: `${Nombre}`,
            age: `${Edad}`,
            circs: `${cronica}`,
            description: `Nombre: ${Nombre}, Ciudad: ${Ciudad}`,
            caseId: `${Contador}`, // Este será el ID para el enlace
            autority: `${policia_involucrado}`,
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
