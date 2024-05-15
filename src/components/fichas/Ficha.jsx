import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Ficha.module.css";

const Ficha = () => {
  const { Contador } = useParams();
  const [caso, setCaso] = useState(null);
  let tipoCaso;

  // Determinar el tipo de caso según el primer carácter del Contador
  if (Contador[0] === "d") {
    tipoCaso = "dependencias";
  } else if (Contador[0] === "g") {
    tipoCaso = "gatillo";
  } else if (Contador[0] === "r") {
    tipoCaso = "reporte";
  } else {
    tipoCaso = "no encontrado";
  }

  useEffect(() => {
    const fetchCaso = async () => {
      try {
        // Obtener los datos del archivo JSON correspondiente al tipo de caso
        const response = await fetch(`data/${tipoCaso}LaPlata.json`);
        const data = await response.json();

        // Encontrar el caso por Contador
        const casoEncontrado = data.features.find(
          (c) => c.properties.Contador === Contador,
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
  }, [Contador, tipoCaso]);

  if (!caso) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={styles.data}>
        <h2 className={styles.title}>
          {tipoCaso === "gatillo"
            ? "gatillo"
            : tipoCaso === "dependencias"
              ? "dependencias"
              : tipoCaso === "reporte"
                ? "Reporte"
                : "Tipo Desconocido"}
        </h2>
        <ul>
          <li className={styles.name}>{caso.properties.Nombre}</li>
          <li className={styles.gender}>Género: {caso.properties.Género}</li>
          <li className={styles.age}>Edad: {caso.properties.Edad}</li>
          <li className={styles.number}>Ciudad: {caso.properties.Ciudad}</li>
          <li className={styles.number}>
            Circunstancias: {caso.properties.Circunstancias}
          </li>
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
