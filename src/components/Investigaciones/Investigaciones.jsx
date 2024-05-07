import styles from "./Investigaciones.module.css";
import Temas from "../Temas";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
const tituloNotaPrincipal =
  "La bonaerense en la mira: de una internación psiquiátrica a un doble femicidio";
const fechaUltimoReporte = "27/09/2023";
const fotoNotaPrincipal =
  "../src/components/investigaciones/investigacion/Crisis_salud_Mental_Mapa3.jpg";
const fechaNotaPrincipal = "08/05/2024";
const autorxsNotaPrincipal = " Julia Pascolini";
const ilusNotaPrincipal = "Panchopepe";
const numeroReporte = "Tercer";

const Investigaciones = () => {
  return (
    <>
      <section className={styles.investContainer}>
        <section className={styles.titleContainer}>
          <h2 className={styles.title}>INVESTIGACIONES</h2>
          <Icons
            icon={"investigaciones"}
            className={styles.headerIcon}
            iconSize="4rem"
          />

          <section className={styles.typeMenu}>
            <h3 className={styles.type}>Informes</h3>
            <h3 className={styles.type}>Detrás del expediente</h3>
            <h3 className={styles.type}>Reportes</h3>
            <h3 className={styles.type}>Podkast</h3>
          </section>
        </section>

        <section className={styles.investigaciones}>
          <section className={styles.investNovedades}>
            <Link to="/investigacion/bonaerense-mira">
              <section className={styles.notaPrincipal}>
                <img
                  src={fotoNotaPrincipal}
                  alt=""
                  className={styles.fotoNotaPrincipal}
                />
                <section className={styles.infoNotaPrincipal}>
                  <h2 className={styles.tituloNotaPrincipal}>
                    {tituloNotaPrincipal}
                  </h2>
                  <section className={styles.infoBasica}>
                    <section className={styles.autorxsContainer}>
                      <div className={styles.autorxContainer}>
                        <Icons className={styles.icon} icon="autorx" />
                        <h5 className={styles.autorx}>
                          {autorxsNotaPrincipal}
                        </h5>
                      </div>
                      <div className={styles.ilusContainer}>
                        <Icons className={styles.icon} icon="ilus" />
                        <h5 className={styles.ilus}>{ilusNotaPrincipal}</h5>
                      </div>
                    </section>
                  </section>
                  <h6 className={styles.fechaContainer}>
                    {fechaNotaPrincipal}
                  </h6>
                </section>
              </section>
            </Link>
          </section>

          <section className={styles.investCol2}>
            <section
              style={Temas.reportesTema}
              className={styles.ultimoReporteContainer}
            >
              <img src="" alt="" className={styles.fotoUltimoReporte} />
              <section className={styles.datosReporte}>
                <h4 className={styles.fechaUltimoReporte}>
                  {fechaUltimoReporte}
                </h4>
                <h2 className={styles.tituloUltimoReporte}>
                  {numeroReporte} Reporte
                </h2>
                <h4 className={styles.subtituloUltimoReporte}>
                  de violencia policial
                </h4>
              </section>
            </section>
            <Link
              to="/podcast"
              style={Temas.investTema}
              className={styles.podcastContainer}
            >
              <section style={Temas.investTema} className={styles.podcast}>
                <h2 className={styles.tituloPodcast}>
                  #05 | De la calle también pueden desalojarte
                </h2>
                <div className={styles.bajadaPodcast}>
                  <h5 className={styles.sectionPodcast}>Podcast </h5>{" "}
                  <h5 className={styles.play}>x</h5>
                </div>
              </section>
            </Link>
            <section className={styles.investMore}>
              <Link
                to="/autorxs"
                style={Temas.investTema}
                className={styles.autorxsSectionContainer}
              >
                <section
                  style={Temas.investTema}
                  className={styles.autorxsSection}
                >
                  <h2 className={styles.tituloAutorxsSection}>Autorxs</h2>
                  <div></div>
                </section>
              </Link>
              <Link
                to="/investigaciones/lista"
                className={styles.todasLinkContainer}
              >
                <section style={Temas.investTema} className={styles.todasLink}>
                  <h5 className={styles.flecha}>Todas</h5>
                </section>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Investigaciones;
