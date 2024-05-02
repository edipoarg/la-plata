import { Marker } from "react-map-gl/maplibre";
import PropTypes from "prop-types";
import styles from "./GatilloMarkers.module.css";
import Icons from "../iconos/Icons";

const GatilloMarkers = ({ gatillos, setPopupInfo, setMarker, selected }) => {
  const renderMarker = (gatillo) => {
    const { properties, geometry } = gatillo;
    const { Contador, Nombre, Ciudad, Edad, Circunstancias } = properties;
    const { coordinates } = geometry;
    const [longitude, latitude] = coordinates;

    const gatilloStyle = `${styles.gatillo} ${selected === Contador ? styles.selected : ""}`;

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
            circs: `${Circunstancias}`,
            description: `Nombre: ${Nombre}, Ciudad: ${Ciudad}`,
            caseId: `${Contador}`,
          });
        }}
      >
        <Icons icon={"reportes"} className={gatilloStyle} iconSize={"1rem"} />
      </Marker>
    );
  };

  return <>{gatillos.features.map((gatillo) => renderMarker(gatillo))}</>;
};

GatilloMarkers.propTypes = {
  gatillos: PropTypes.object.isRequired,
  setPopupInfo: PropTypes.func.isRequired,
  setMarker: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired, // Cambiar el tipo de 'selected' a 'number'
};

export default GatilloMarkers;
