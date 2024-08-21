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
      </section>
    </section>
  );
};

export default Nosotrxs;
