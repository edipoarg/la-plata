// Investigacion.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Investigacion.module.css';
import Icons from '../../iconos/Icons';

const Investigacion = () => {
  const { dominio } = useParams();
  const [investigacion, setInvestigacion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../src/components/investigaciones/investigaciones.json`); // Ajusta la ruta según tu estructura
        const data = await response.json();
        const investigacionSeleccionada = data.find((item) => item.dominio === dominio);

        if (investigacionSeleccionada) {
          setInvestigacion(investigacionSeleccionada);
        } else {
          // Manejar el caso donde no se encuentra la investigación con el dominio proporcionado
        }
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, [dominio]);

  if (!investigacion) {
    // Puedes mostrar un mensaje de carga o redirigir a una página de error
    return <p>Cargando...</p>;
  }

  return (
    <>
    <section className={styles.investigacionContainer}>
      <img src={investigacion.imagen} alt={`Foto de la investigación: ${investigacion.titulo}`} className={styles.fotoInvestigacion} />
      <section className={styles.basicInfo}>
        <div className={styles.autorxsContainer}>


        </div>
      <h1>{investigacion.titulo}</h1>
      <p>Autorxs: {investigacion.autorxs}</p>
      <p>Fecha: {investigacion.fecha}</p>
      </section>
      
      <p>{investigacion.textoBajada}</p>
      <p>{investigacion.textoCompleto}</p>
    </section>
    </>
  );
};

export default Investigacion;
