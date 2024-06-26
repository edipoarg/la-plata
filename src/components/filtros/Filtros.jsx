import { useState } from "react";
import styles from "./Filtros.module.css";
import PropTypes from "prop-types";
import Icons from "../iconos/Icons";

export default function Filtros({ handleTipoFilter, setTipoFilters }) {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleTipoFilterChange = (tipoId) => () => {
    if (selectedFilter === tipoId) {
      setSelectedFilter(null);
      setTipoFilters((prevFilters) => ({ ...prevFilters, [tipoId]: true }));
    } else {
      setSelectedFilter(tipoId);
      setTipoFilters((prevFilters) => ({ ...prevFilters, [tipoId]: false }));
      handleTipoFilter();
    }
  };

  return (
    <>
      <div className={styles.botonFiltros}>
        <br />
      </div>

      <div>
        <div className={styles.filtroTipo}>
          <div
            className={`${styles.tipo1Ref} ${selectedFilter === "Dependencias" ? styles.selected : ""}`}
            onClick={handleTipoFilterChange("Dependencias")}
          >
            <Icons icon="mapa" />
            <h4 className={styles.tipoClass}>Comisarias </h4>
          </div>

          <div
            className={`${styles.tipo3Ref} ${selectedFilter === "GatilloFacil" ? styles.selected : ""}`}
            onClick={handleTipoFilterChange("GatilloFacil")}
          >
            <Icons icon="gatillo" />
            <h4 className={styles.tipoClass}> Gatillo Fácil</h4>
          </div>
        </div>
      </div>
    </>
  );
}

Filtros.propTypes = {
  handleTipoFilter: PropTypes.func.isRequired,
  tipoFilters: PropTypes.shape({
    Dependencias: PropTypes.bool.isRequired,
    Reportes: PropTypes.bool.isRequired,
    GatilloFacil: PropTypes.bool.isRequired,
  }).isRequired,
  setTipoFilters: PropTypes.func.isRequired,
};
