import styles from "./Filtros.module.css";
import PropTypes from "prop-types";
import Icons from "../iconos/Icons";
import MuiSwitch from "../MuiSwitch";




export default function Filtros({
  handleTipoFilter,
  tipoFilters,
  setTipoFilters,
}) {
  const handleTipoFilterChange = (tipoId) => (event) => {
    setTipoFilters((prevFilters) => ({
      ...prevFilters,
      [tipoId]: event.target.checked,
    }));
    handleTipoFilter();
  };

  return (

     <>
          <div className={styles.botonFiltros}>
            <br />
          </div>


          <div>
            <div className={styles.filtroTipo}>
              <div className={styles.tipos}>
                <div className={styles.tipo1Ref}>
                  {" "}
                   <Icons icon='mapa'/>
                  <h4 className={styles.tipoClass}>
                    Comisarias{" "}
                  </h4>
                </div>
                <MuiSwitch sx={{ m: 1 }} className={styles.switch}
                  defaultChecked={tipoFilters.Dependencias}
                  onChange={handleTipoFilterChange("Dependencias")}
                ></MuiSwitch>
                 
   
              </div>

              <div className={styles.tipos}>
                <div className={styles.tipo2Ref}>
                  {" "}
                  <Icons icon='reportes'/>

                  <h4 className={styles.tipoClass}>
                    {" "}
                    Reportes
                  </h4>
                </div>

                <MuiSwitch sx={{ m: 1 }} className={styles.switch}
                  defaultChecked={tipoFilters.Casos}
                  onChange={handleTipoFilterChange("Casos")}
                ></MuiSwitch>
              </div>

              <div className={styles.tipos}>
                <div className={styles.tipo3Ref}>
                  {" "}
                  <Icons icon='gatillo'/>

                  
                  <h4 className={styles.tipoClass}>
                    {" "}
                    Gatillo Fácil
                  </h4>
                </div>
                <MuiSwitch sx={{ m: 1 }} className={styles.switch}
                  defaultChecked={tipoFilters.GatilloFacil}
                  onChange={handleTipoFilterChange("GatilloFacil")}
                ></MuiSwitch>
              </div>
            </div>
          </div>
 </>
  );
}

Filtros.propTypes = {
  handleTipoFilter: PropTypes.func.isRequired,
  tipoFilters: PropTypes.shape({
    Dependencias: PropTypes.string.isRequired,
    Casos: PropTypes.string.isRequired,
    GatilloFacil: PropTypes.string.isRequired,
  }).isRequired,
  setTipoFilters: PropTypes.func.isRequired,
};
