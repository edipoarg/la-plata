import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './FichaDependencias.module.css'

const FichaDependencias = () => {
  const { NumCaso } = useParams();
  const [caso, setCaso] = useState(null);

  useEffect(() => {
    const fetchCaso = async () => {
      try {
        // Obtener los datos del archivo JSON
        const response = await fetch('data/gatilloLaPlata.json');
        const data = await response.json();

        // Encontrar el caso por NumCaso
        const casoEncontrado = data.features.find(c => c.properties.NumCaso === parseInt(NumCaso));
        if (casoEncontrado) {
          setCaso(casoEncontrado);
        } else {
          console.log('Caso no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar los datos del caso:', error);
      }
    };

    fetchCaso();
  }, [NumCaso]);

  if (!caso) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.data}>
      <h2 className={styles.title}>Gatillo Fácil</h2>
      <ul>
        <li className={styles.name}>{caso.properties.Nombre}</li>
        <li className={styles.gender}>Género: {caso.properties.Género}</li>
        <li className={styles.age}>Edad: {caso.properties.Edad}</li>
        <li className={styles.number}>Ciudad: {caso.properties.Ciudad}</li>
        <li className={styles.number}>Imputados: {caso.properties.Imputados}</li>
        <li className={styles.number}>Fuerza: {caso.properties.Cod_Fuerza}</li>
        <li className={styles.number}>Circunstancias: {caso.properties.Circunstancias}</li>

        {/* Agrega más detalles del caso aquí */}
      </ul>
    </div>
  );
};

export default FichaDependencias;
