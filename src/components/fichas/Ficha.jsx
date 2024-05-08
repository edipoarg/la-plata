import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Ficha.module.css";

const Ficha = () => {
  const { Contador } = useParams();
  const [caso, setCaso] = useState(null);

  useEffect(() => {
    const fetchCaso = async () => {
      try {
        // Obtener los datos del archivo JSON
        const response = await fetch("data/gatilloLaPlata.json");
        const data = await response.json();

        // Encontrar el caso por Contador
        const casoEncontrado = data.features.find(
          (c) => c.properties.Contador === parseInt(Contador),
        );
        if (casoEncontrado) {
          setCaso(casoEncontrado);
        } else {
          console.log("Caso no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar los datos del caso:", error);
      }
    };

    fetchCaso();
  }, [Contador]);

  if (!caso) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={styles.data}>
        <h2 className={styles.title}>Gatillo Fácil</h2>
        <ul>
          <li className={styles.name}>{caso.properties.Nombre}</li>
          <li className={styles.gender}>Género: {caso.properties.Género}</li>
          <li className={styles.age}>Edad: {caso.properties.Edad}</li>
          <li className={styles.number}>Ciudad: {caso.properties.Ciudad}</li>
          <li className={styles.number}>
            Circunstancias: {caso.properties.cronica}
          </li>

          {/* Agrega más detalles del caso aquí */}
        </ul>
      </div>
      <div className={styles.policeData}>
        <li className={styles.number}>
          Imputados: {caso.properties.Imputados}
        </li>
        <li className={styles.number}>Fuerza: {caso.properties.Cod_Fuerza}</li>
      </div>
    </>
  );
};

export default Ficha;
