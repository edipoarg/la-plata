import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./FichaAutorxs.module.css";

const FichaAutorxs = () => {
  const { enlaceVer } = useParams(); // Usa el nombre del parámetro de la URL
  const [autor, setAutor] = useState(null);

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const response = await fetch("/data/autorxs.json");
        const data = await response.json();

        // Buscar el autor por el enlaceVer
        const autorEncontrado = data.find(
          (autor) => autor.enlaceVer === `/${enlaceVer}`,
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
  }, [enlaceVer]);

  if (!autor) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.fichaAutorxs}>
      <section className={styles.header}>
        <img
          className={styles.img}
          src={autor.imagen}
          alt={`Foto de ${autor.nombre}`}
        />
        <div className={styles.headerData}>
          <h3 className={styles.title}>{autor.nombre}</h3>
          <h5 className={styles.data}>{autor.info}</h5>
        </div>
      </section>

      <h3 className={styles.line}>
        ______________________________________________
      </h3>
      {/* Agrega más contenido según sea necesario */}
    </div>
  );
};

export default FichaAutorxs;
