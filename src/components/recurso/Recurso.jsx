import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import RecursoPost from "./RecursoPost";
import migrantesData from "./migrantes.json";
import ambulantesData from "./ambulantes.json";
import filmarData from "./filmar.json";
import generoData from "./genero.json";
import institucionalesData from "./institucionales.json";
import detencionData from "./detencion.json";
import guiaData from "./guia.json";
import styles from "./RecursoPost.module.css";
import SubMenuPost from "./subMenuRecurso";
import Icons from "../iconos/Icons";

const Recurso = () => {
  const { dominio } = useParams();
  const [posts, setPosts] = useState([]);
  const postRefs = useRef([]);

  // Cargar los datos del archivo JSON correspondiente al dominio
  useEffect(() => {
    const cargarPosts = () => {
      // Elegir el archivo JSON según el dominio
      let data;
      switch (dominio) {
        case "migrantes":
          data = migrantesData;
          break;
        case "ambulantes":
          data = ambulantesData;
          break;
        case "filmar":
          data = filmarData;
          break;
        case "genero":
          data = generoData;
          break;
        case "institucionales":
          data = institucionalesData;
          break;
        case "detencion":
          data = detencionData;
          break;
        case "guia":
          data = guiaData;
          break;
        default:
          console.error("Dominio no válido");
      }
      if (data) {
        setPosts(data.posts);
      }
    };

    cargarPosts();
  }, [dominio]);

  const scrollToPost = (index) => {
    if (postRefs.current[index]) {
      postRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.recurso}>
      <div className={styles.header}>
        <div>
          <Icons icon={dominio} className={styles.icon} iconSize="2.2rem" />
          <h3 className={styles.title}>{dominio}</h3>
        </div>

        <div className={styles.menuContainer}>
          {posts.map((post, index) => (
            <SubMenuPost
              key={index}
              title={post.title}
              onClick={() => scrollToPost(index)} // Desplaza al post correspondiente
            />
          ))}
        </div>
      </div>
      <div className={styles.postContainer}>
        {posts.map((post, index) => (
          <RecursoPost
            key={index}
            ref={(el) => (postRefs.current[index] = el)}
            title={post.title}
            subtitle={post.subtitle}
            Dirección={post.Dirección}
            Teléfono={post.Teléfono}
            Email={post.Email}
            content={post.content}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Recurso;
