import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecursoPost from './RecursoPost';
import migrantesData from './migrantes.json';
import ambulantesData from './ambulantes.json';
import filmarData from './filmar.json';
import generoData from './genero.json';
import institucionalesData from './institucionales.json';
import detencionData from './detencion.json';
import guiaData from './guia.json';
import styles from './RecursoPost.module.css';

const Recurso = () => {
  const { dominio } = useParams();
  const [posts, setPosts] = useState([]);

  // Cargar los datos del archivo JSON correspondiente al dominio
  useEffect(() => {
    const cargarPosts = () => {
      // Elegir el archivo JSON según el dominio
      let data;
      switch (dominio) {
        case 'migrantes':
          data = migrantesData;
          break;
        case 'ambulantes':
          data = ambulantesData;
          break;
        case 'filmar':
          data = filmarData;
          break;
        case 'genero':
          data = generoData;
          break;
        case 'institucionales':
          data = institucionalesData;
          break;
        case 'detencion':
          data = detencionData;
          break;
        case 'guia':
            data = guiaData;
            break;
        default:
          console.error('Dominio no válido');
      }
      if (data) {
        setPosts(data.posts);
      }
    };

    cargarPosts();
  }, [dominio]);

  return (
    <div className="recurso">
      <h3>{dominio}</h3>
      <div className={styles.postContainer}>
        {posts.map((post, index) => (
          <RecursoPost key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Recurso;
