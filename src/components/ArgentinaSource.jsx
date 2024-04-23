import { GeoJsonSource } from 'react-map-gl';

const ArgentinaSource = () => {
  return (
    <GeoJsonSource
      id="argentina-source"
      data="public/data/argentina-latest.osm.pbf"
      type="vector"
    />
  );
};

export default ArgentinaSource;
