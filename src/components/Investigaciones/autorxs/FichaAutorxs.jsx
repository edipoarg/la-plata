import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./FichaAutorxs.module.css";

const FichaAutorxs = () => {
  const { ContadorAutor } = useParams();
  const [autor, setAutor] = useState(null);

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        // Obtener los datos del archivo JSON
        const response = await fetch("./autorxs.json");
        const data = await response.json();

        // Encontrar el caso por Contador
        const autorEncontrado = data.features.find(
          (c) => c.properties.Contador === parseInt(ContadorAutor),
        );
        if (autorEncontrado) {
          setAutor(autorEncontrado);
        } else {
          console.log("Autor no encontrado");
        }
      } catch (error) {
        console.error("Error al cargar los datos del autor:", error);
      }
    };

    fetchAutor();
  }, [ContadorAutor]);

  if (!autor) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className={styles.fichaAutorxs}>
        <section className={styles.header}>
          <img></img>
          <div className={styles.headerData}>
            <h3 className={styles.title}>{autor.properties.nombre}</h3>
            <h5 className={styles.data}>
              {" "}
              (1996). Periodista platense. Docente en contextos de encierro
              punitivo (cárceles). Fan de escribir y hablar en lugares.
              Comunicadora por formación y peronista por naturaleza. Estudiante
              avanzada (madura tirando a pasada) de Comunicación Social por la
              UNLP.{" "}
            </h5>
          </div>
        </section>

        <h3 className={styles.line}>
          ______________________________________________
        </h3>
        <section className={styles.post}>
          <h4 className={styles.postTitle}>La bonaerense en la mira</h4>
          <h4 className={styles.postInfo}>
            El 27 de junio de 2023 Nazareno Miño disparó su 9mm reglamentaria y
            mató a Victoria Díaz, su expareja y a Castorina Díaz, hermana de
            Victoria. Antes de cometer el asesinato, el expolicía había
            atravesado una internación psiquiátrica por intento de suicidio,
            tres licencias médicas por trastornos de ansiedad y dos denuncias en
            su contra...
          </h4>
          <h5 className={styles.postDate}>12/01/2022</h5>
        </section>
      </div>
    </>
  );
};

export default FichaAutorxs;
