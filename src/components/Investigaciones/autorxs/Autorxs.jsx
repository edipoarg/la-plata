import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Autorxs.module.css";

const Autorxs = () => {
  const [autorxsData, setAutorxsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "../src/components/investigaciones/autorxs/autorxs.json",
        );
        const data = await response.json();
        setAutorxsData(data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles.container}>
      <section className={styles.titleContainer}>
        <h2 className={styles.title}>Autorxs</h2>
      </section>
      <section className={styles.autorxsContainer}>
        {autorxsData.map((autorx, index) => (
          <div className={styles.autorContainer} key={index}>
            <img
              src={autorx.imagen}
              alt={`Foto de ${autorx.nombre}`}
              className={styles.autorImagen}
            />
            <h2 className={styles.autorNombre}>{autorx.nombre}</h2>
            <Link to={autorx.enlaceVer} className={styles.verEnlace}>
              Ver
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Autorxs;
