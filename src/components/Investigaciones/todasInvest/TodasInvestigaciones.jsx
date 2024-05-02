// TodasInvestigaciones.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodasInvestigaciones.module.css";

const TodasInvestigaciones = () => {
  const [investigaciones, setInvestigaciones] = useState([]);
  const [backgroundClassName, setBackgroundClassName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "../src/components/investigaciones/investigaciones.json",
        );
        const data = await response.json();
        setInvestigaciones(data);

        if (data.length > 0) {
          // Obtener el tipo de investigación de la primera investigación
          const tipoInvestigacion = data[0].tipoInvestigacion;
          setBackgroundClassName(getBackgroundColor(tipoInvestigacion));
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };

    fetchData();
  }, []);

  const getBackgroundColor = (tipoInvestigacion) => {
    switch (tipoInvestigacion) {
      case "informe":
        return styles.informeBackground;
      case "expediente":
        return styles.expedienteBackground;
      case "reporte":
        return styles.reporteBackground;
      default:
        return ""; // En caso de que el tipo de investigación no coincida con ninguno de los anteriores
    }
  };

  return (
    <div className={styles.todasContainer}>
      {investigaciones.map((investigacion) => (
        <Link
          key={investigacion.id}
          to={`/investigacion/${investigacion.dominio}`}
          className={`${styles.linkInvestigacion} ${backgroundClassName}`}
        >
          <section className={`${styles.investigacionContainer} `}>
            <img
              src={investigacion.imagen}
              alt={`Foto de la investigación: ${investigacion.titulo}`}
              className={styles.fotoInvestigacion}
            />
          </section>

          <section className={styles.dataContainer}>
            <h2 className={styles.tituloInvestigacion}>
              {investigacion.titulo}
            </h2>
            <p className={styles.autorxFecha}>
              Autorxs: {investigacion.autorxs} - Fecha: {investigacion.fecha}
            </p>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default TodasInvestigaciones;
