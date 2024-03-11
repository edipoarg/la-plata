// PROGRAM IMPORTS
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MapGL, { NavigationControl } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// STYLES IMPORTS
import mystyle from "./mystyle.json";

/*import { Link as ScrollLink } from "react-scroll";*/

// COMPONENTS IMPORTS
import LogoMapa from "./LogoMapa";
import Screen from "./Screen";
import styles from "../styles/Mapa.module.css";

// GEOJSON IMPORTS
import { departamentos, caba, barriosCaba } from "../data/index";
import { DepsSource, CabaSource, BarriosCabaSource } from "./Sources";

// MARKERS IMPORTS
import  {Markers}  from "./Markers";

// Popup IMPORTS
import Popup from "./Popup";

//Filtros Import
import Filtros from "./filtros/Filtros"; // Cambia la ruta a tu formulario


const Mapa = () => {
  const { urls } = useLoaderData();
  const cases = urls.casos.cases.map((c) => ({ ...c, date: new Date(c.date) }));


  

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
      height: "90vh",
    },
    mapStyle: mystyle,
  };

  //FILTERS

  const handleTipoFilter = () => {
    const filteredDataByType = cases.filter(
      (event) => tipoFilters[event.tipoId],
    );
    setFilteredData(filteredDataByType);
  };

  const [tipoFilters, setTipoFilters] = useState({
    Dependencias: true,
    Casos: true,
    GatilloFacil: true,
  });
  const [filteredData, setFilteredData] = useState(cases);

  //visibilidad Filtro
  const [filtrosVisible, setFiltrosVisible] = useState(true);
  const toggleFiltrosVisibility = () => {
    setFiltrosVisible(!filtrosVisible);
  };
  const [isCloseButtonClicked, setIsCloseButtonClicked] = useState(false);
  const handleClickCloseButton = () => {
    // Toggle the state when the button is clicked
    setIsCloseButtonClicked(!isCloseButtonClicked);

    // Add any additional logic you want when the button is clicked
  };


  //SEleccion
  const [setSelectedFeatureId] = useState(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState(null);

  // SCREEN INFO
  const [popupInfo, setPopupInfo] = useState(null);

  // HOVER
  const handleHover = (event) => {
    setSelectedFeatureId(event.features?.[0]?.id || null);
  };
  const handleLeave = () => setSelectedFeatureId(null);


  // VIOLENCIAS
  useEffect(() => {
    const newData = cases;


    const filteredDataByType = newData.filter(
      (event) => tipoFilters[event.tipoId],
    );

    setFilteredData(filteredDataByType);
    }, [cases, tipoFilters]);




  return (
    <>
      <section id="MapaDev" className={styles.MapaDev}>
        {filtrosVisible && (
        <Filtros
          caseCount={filteredData.length}
          handleTipoFilter={handleTipoFilter}
          tipoFilters={tipoFilters}
          setTipoFilters={setTipoFilters}
        />
      )}
       <div className={styles.botonFiltrosMain}>
        {/* FIXME: Why is this not a button? */}
        {/* Render different button content based on the state */}
        <a
          aria-label="Hide"
          onClick={() => {
            handleClickCloseButton();
            toggleFiltrosVisibility();
          }}
          href="#"
          className={`${styles.closeButton} ${styles["simple-button"]} ${isCloseButtonClicked ? styles["transformed-button"] : ""}`}
        >
          {isCloseButtonClicked ? (
            <div>
              <h5 className={styles.botonFiltrosMap}>FILTROS</h5>
            </div>
          ) : (
            <>X</>
          )}
        </a>
      </div>
        <Screen />
        <MapGL id="mapa" mapLib={maplibregl} {...mapProps}
         onHover={handleHover} 
         onLeave={handleLeave} >

           {!!(filteredData && filteredData.length) && (
          <Markers
            data={filteredData}
            setPopupInfo={setPopupInfo}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
            tipoFilters={tipoFilters}
            handleTipoFilter={handleTipoFilter}
          />
        )}
          <NavigationControl position="top-right" />
          <DepsSource data={departamentos} />
          <BarriosCabaSource data={barriosCaba} />
          <CabaSource data={caba} />
        </MapGL>
        <LogoMapa />
      </section>
      {popupInfo && <Popup {...popupInfo} />}

    </>
  );
};

export default Mapa;
