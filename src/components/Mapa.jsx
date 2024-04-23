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
import { departamentos, caba, barriosCaba, laPlata, departamentosLaPlata, gatillo } from "../data/index";
import { DepsSource, CabaSource, BarriosCabaSource, LaPlataSource, DepartamentosLaPlataSource } from "./Sources";

// MARKERS IMPORTS
import  {Markers}  from "./Markers";
import { dependenciasLaPlata } from "../data/index";
import { dependenciasCaba } from "../data/index";
import DependenciasMarkers from "./dependenciasMarkers/DependendenciasMarkers";
import GatilloMarkers from "./gatilloMarkers/GatilloMarkers";
/*import DependenciasCabaMarkers from "./dependenciasCabaMarkers/DependenciasCabaMarkers";*/


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
      height: "100vh",
    },
    mapStyle:'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json',
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

 //markers



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
      <Screen title={popupInfo ? popupInfo.title : 'Elegí una dependencia o un caso'} 
      level={popupInfo ? popupInfo.level : null}
      adress={popupInfo ? popupInfo.adress : null}
      phone={popupInfo ? popupInfo.phone : null} 
      age={popupInfo ? popupInfo.age : null}
      circs={popupInfo ? popupInfo.circs : null}/>

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
          <LaPlataSource data={laPlata}/>
          <DepartamentosLaPlataSource data={departamentosLaPlata}/>
          
 {/* Renderiza los marcadores de las dependencias */}
 <DependenciasMarkers
            dependencias={dependenciasLaPlata}
            setPopupInfo={setPopupInfo}
            setMarker={setSelectedMarkerId}
            selected={selectedMarkerId}
          />

           {/* Renderiza los marcadores de las dependencias */}


<GatilloMarkers
    gatillos={gatillo} // Asegúrate de pasar los datos de los gatillos aquí
    setPopupInfo={setPopupInfo}
    setMarker={setSelectedMarkerId}
    selected={selectedMarkerId}
  />

         
          </MapGL>
        <LogoMapa />
      </section>

    </>
  );
};

export default Mapa;