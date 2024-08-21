// PROGRAM IMPORTS
import { useState } from "react";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Link } from "react-router-dom";
/*import { Link as ScrollLink } from "react-scroll";*/

// STYLES IMPORTS
//*import mystyle from "./mystyle.json";(style anterior*/

// COMPONENTS IMPORTS
import LogoMapa from "./LogoMapa";
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";

// GEOJSON IMPORTS
import {
  departamentos,
  laPlata,
  departamentosLaPlata,
  gatillo,
} from "../data/index";
import {
  DepsSource,
  LaPlataSource,
  DepartamentosLaPlataSource,
} from "./Sources";

// MARKERS IMPORTS
import { dependenciasLaPlata } from "../data/index";
import DependenciasMarkers from "./dependenciasMarkers/DependendenciasMarkers";
import GatilloMarkers from "./gatilloMarkers/GatilloMarkers";
import Filtros from "./filtros/Filtros";

const Mapa = () => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    if (newFilter === currentFilter) setCurrentFilter("all");
    else setCurrentFilter(newFilter);
  };

  // PROPERTIES OF THE MAP
  const mapProps = {
    initialViewState: {
      longitude: -57.954444,
      latitude: -35.05,
      zoom: 1.5,
      minZoom: 1,
      maxZoom: 18,
      maxBounds: [
        [-58.41105, -35.28147], // Lower-left limit
        [-57.52902, -34.69485], // Upper-right limit
      ],
    },
    style: {
      width: "100vw",
      height: "100vh",
    },

    //New Style (Full map data)
    mapStyle: "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
  };

  //Seleccion
  const [setSelectedFeatureId] = useState(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  // SCREEN INFO
  const [popupInfo, setPopupInfo] = useState(null);

  // HOVER
  const handleHover = (event) => {
    setSelectedFeatureId(event.features?.[0]?.id || null);
  };
  const handleLeave = () => setSelectedFeatureId(null);

  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        <Link to="/denuncia">
          <div className={styles.emergButton}>
            <h4 className={styles.emerg}>DENUNCIÁ</h4>
          </div>
        </Link>

        <Filtros
          currentFilter={currentFilter}
          handleFilterChange={handleFilterChange}
        />
        <Screen
          title={
            popupInfo ? popupInfo.title : "Elegí una dependencia o un caso"
          }
          level={popupInfo ? popupInfo.level : null}
          autority={popupInfo ? popupInfo.autority : null}
          grade={popupInfo ? popupInfo.grade : null}
          address={popupInfo ? popupInfo.address : null}
          phone={popupInfo ? popupInfo.phone : null}
          age={popupInfo ? popupInfo.age : null}
          circs={popupInfo ? popupInfo.circs : null}
          caseId={popupInfo ? popupInfo.caseId : null}
        />

        <MapGL
          id="mapa"
          mapLib={maplibregl}
          {...mapProps}
          onHover={handleHover}
          onLeave={handleLeave}
        >
          <NavigationControl position="top-right" />
          <DepsSource data={departamentos} />
          <LaPlataSource data={laPlata} />
          <DepartamentosLaPlataSource data={departamentosLaPlata} />

          {/* Renderiza los marcadores de las dependencias */}
          {(currentFilter === "dependencias" || currentFilter === "all") && (
            <DependenciasMarkers
              dependencias={dependenciasLaPlata}
              setPopupInfo={setPopupInfo}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}

          {(currentFilter === "gatillo" || currentFilter === "all") && (
            <GatilloMarkers
              gatillos={gatillo}
              setPopupInfo={setPopupInfo}
              setMarker={setSelectedMarkerId}
              selected={selectedMarkerId}
            />
          )}
        </MapGL>
        <LogoMapa />
      </section>
    </>
  );
};

export default Mapa;
