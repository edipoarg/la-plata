import { FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./Nosotros.module.css";

const Nosotrxs = () => {
  return (
    <section className={styles.nosotrxs}>
      <section className={styles.titulosNosotrxs}>
        <h1>
          MAPA <br />
          DE LA <br /> POLICÍA
        </h1>
        <h3>Red de Cuidados Contra la violencia policial</h3>
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com/mapadelapolicialaplata"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redsocial}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com/mapadelapolicialaplata"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.redsocial}
          >
            <FaTwitter />
          </a>
        </div>

        <div className={styles.logos}>
          <img
            className={styles.img}
            src="https://static.wixstatic.com/media/0f4ca0_984f4e40898e46138e8120fd82694bf5~mv2.png/v1/crop/x_112,y_233,w_1805,h_645/fill/w_706,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/crisis.png"
            alt="Crisis"
          />
          <img
            className={styles.img}
            src="https://static.wixstatic.com/media/0f4ca0_87f1c47b63da424e911d8d41931c60b6~mv2.png/v1/crop/x_0,y_272,w_1080,h_544/fill/w_750,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Copia%20de%20Logo%20Luc%C3%ADa%20Klug%20diputada%20provincial.png"
            alt="Lucía Klug"
          />
          <img
            className={styles.img}
            src="https://static.wixstatic.com/media/0f4ca0_7712e42bfdaf43c283966018ac57404d~mv2.png/v1/fill/w_750,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/edlpo.png"
            alt="Edipo"
          />
          <img
            className={styles.img}
            src="https://static.wixstatic.com/media/0f4ca0_d9b263673cb9499eb00197abcb52bb35~mv2.png/v1/crop/x_0,y_137,w_1080,h_850/fill/w_750,h_590,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Copia%20de%20Logo%20Luc%C3%ADa%20Klug%20diputada%20provincial%20(1).png"
            alt="Perycia"
          />
        </div>
      </section>
    </section>
  );
};

export default Nosotrxs;
