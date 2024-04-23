import {Source, Layer} from 'react-map-gl/maplibre';


export const DepsSource = ({data, style}) => (
    <Source id="departamentos-source" type="geojson" data={data}>
      <Layer
        id="departamentos-layer"
        type="fill" // Capa de relleno para representar polígonos
        paint={{
          'fill-color': "#232128",
          'fill-opacity': 0.8,
          'fill-outline-color': "#9423ed",
        }}
      />
    </Source>
  );

  export const BarriosCabaSource = ({data, style}) => (
    <Source id="barriosCaba-source" type="geojson" data={data}>
      <Layer
        id="barriosCaba-layer"
        type="fill" // Capa de relleno para representar polígonos
        paint={{
          'fill-color': "#232128",
          'fill-opacity': 1,
          'fill-outline-color': "#2cb34c",
        
        }}
      />
    </Source>
  );

  
export const CabaSource = ({data, style}) => (
    <Source id="caba-source" type="geojson" data={data}>
      <Layer
        id="caba-layer"
        type="fill" // Capa de relleno para representar polígonos
        paint={{
          'fill-color': "rgba(255, 255, 255, 0)",
          'fill-opacity': 1,
          'fill-outline-color': "#9423ed",
        }}
      />
    </Source>
  );
  export const LaPlataSource = ({data, style}) => (
    <Source id="laplata-source" type="geojson" data={data}>
      <Layer
        id="laplata-layer" // Cambiado a "laplata-layer" para que sea único
        type="fill"
        paint={{
          'fill-color': "rgba(255, 255, 255, 0)",
          'fill-opacity': 1,
          'fill-outline-color': "#9423ed",
        }}
      />
    </Source>
  );
  
  export const DepartamentosLaPlataSource = ({data, style}) => (
    <Source id="departamentosLaPlata-source" type="geojson" data={data}>
      <Layer
        id="departamentosLaPlata-layer" // Cambiado a "departamentosLaPlata-layer" para que sea único
        type="fill"
        paint={{
          'fill-color': "rgba(255, 255, 255, 0)",
          'fill-opacity': 1,
          'fill-outline-color': "#2a8842",
        }}
      />
    </Source>
  );
  

  