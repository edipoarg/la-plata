import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "../context/Context";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.Home}>
      <h2 className={styles.titulo}>MAPA DE LA POLICÍA</h2>
      <ul className={styles.lista}>
        <li className={styles.boton}>
          <Link to="/caba">CABA</Link>
        </li>
        <li className={styles.boton}>
          <Link to="/laplata">LA PLATA</Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
