import styles from "./Investigaciones.module.css";
import { Link } from "react-router-dom";
import Icons from "../iconos/Icons";
import Mapa from "../Mapa";

const tituloNotaPrincipal =
  "La bonaerense en la mira: de una internación psiquiátrica a un doble femicidio";
const fotoNotaPrincipal =
  "https://static.wixstatic.com/media/0f4ca0_8720002caf4347e986b0913169d7bfdc~mv2.jpg/v1/fill/w_1211,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Crisis_salud_Mental_Mapa3.jpg";
const fechaNotaPrincipal = "29/03/2022";
const autorxsNotaPrincipal = "Julia Pascolini";
const ilusNotaPrincipal = "Brenda Greco";

const Investigaciones = () => {
  return (
    <>
      <div className={styles.mapBlur}>
        <section className={styles.investContainer}>
          <section className={styles.titleContainer}>
            <h2 className={styles.title}>INVESTIGACIONES</h2>
            <Icons
              icon={"investigaciones"}
              className={styles.headerIcon}
              iconSize="4rem"
            />
          </section>

          <section className={styles.investigaciones}>
            <section className={styles.investNovedades}>
              <Link to="/investigacion/bonaerense-mira">
                <article className={styles.notaPrincipal}>
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
                </article>
              </Link>
              <Link to="/lista" className={styles.todasLinkContainer}>
                <section className={styles.todasLink}>
                  <Icons
                    icon={"flecha"}
                    className={styles.linkIcon}
                    iconSize="2rem"
                  />
                  <h2 className={styles.flecha}>Más investigaciones</h2>
                </section>
              </Link>
            </section>

            <section className={styles.investCol2}>
              <Link
                to="https://perycia.com/"
                className={styles.ultimoReporteContainer}
              >
                <section className={styles.datosReporte}>
                  <h2 className={styles.tituloUltimoReporte}> PERYCIA</h2>
                  <h4 className={styles.subtituloUltimoReporte}>
                    notas periodísticas
                  </h4>
                </section>
              </Link>
              <a
                href="https://open.spotify.com/show/1fhXtCulH39aZgv9P7WH7k"
                className={styles.podcastContainer}
              >
                <section className={styles.podcast}>
                  <Icons
                    icon={"podcast"}
                    className={styles.podcastIcon}
                    iconSize="2.8rem"
                  />
                  <h2 className={styles.tituloPodcast}>Podcast</h2>
                  <div className={styles.bajadaPodcast}></div>
                </section>
              </a>
              <Link to="/autorxs" className={styles.autorxsSectionContainer}>
                <section className={styles.autorxsSection}>
                  <h2 className={styles.tituloAutorxsSection}>Autorxs</h2>
                </section>
              </Link>
            </section>
          </section>
        </section>
      </div>
      <Mapa></Mapa>
    </>
  );
};

export default Investigaciones;
