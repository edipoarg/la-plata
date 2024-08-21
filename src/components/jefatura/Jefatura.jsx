import { useState, useEffect } from "react";
import styles from "./Jefatura.module.css";
import jerarquiaData from "../../data/jerarquia.json";
import Icons from "../iconos/Icons";

const Jefatura = () => {
  const [jerarquia, setJerarquia] = useState([]);

  useEffect(() => {
    // Filtra las entradas que tienen un nombre válido
    const jerarquiaFiltrada = jerarquiaData.filter(
      (persona) => persona.Nombre && persona.Nombre.trim() !== "",
    );
    setJerarquia(jerarquiaFiltrada);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Jefatura de la Fuerza</h1>
        <Icons icon="jefatura" className={styles.icon} iconSize="4rem" />
      </section>
      <ul className={styles.list}>
        {jerarquia.map((persona, index) => (
          <li key={index} className={styles.listItem}>
            <h2 className={styles.nombre}>{persona.Nombre}</h2>
            <p className={styles.grado}>
              <strong></strong> {persona.autoridad}
            </p>
            <p className={styles.autoridad}>
              <strong></strong> {persona.grado}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Jefatura;
