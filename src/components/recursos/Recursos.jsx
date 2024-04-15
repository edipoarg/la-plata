import React from 'react';
import Icons from '../iconos/Icons';
import { Link } from 'react-router-dom';
import styles from './Recursos.module.css';

const recursosItems = [
  { path: 'institucionales', icon: 'intitucionales', nombre: 'Recursos Institucionales' },
  { path: 'detencion', icon: 'anteDetencion', nombre: 'Ante Detención' },
  { path: 'guia', icon: 'guia', nombre: 'Guía Básica' },
  { path: 'genero', icon: 'genero', nombre: 'Recursos de Género' },
  { path: 'ambulantes', icon: 'ambulantes', nombre: 'Recursos Ambulantes' },
  { path: 'migrantes', icon: 'migrantes', nombre: 'Recursos para Migrantes' },
  { path: 'filmar', icon: 'filmar', nombre: 'Cómo Filmar' },
];

const Recursos = () => {
  return (
    <section className={styles.recursosContainer}>
      <section className={styles.titleContainer}>
        <h2 className={styles.title}>Recursos</h2>
        <h4 className={styles.subTitle}>Recomendaciones <br /> para enfrentar <br />la violencia policial</h4>
      </section>
      <section className={styles.recursos}>
        {recursosItems.map((recursosItem, index) => (
          <Link key={index} to={recursosItem.path} className={styles.recursoContainer}>
            <h5 className={styles.iconName}>{recursosItem.nombre}</h5>
            <Icons icon={recursosItem.icon} className={styles.icon} iconSize="2.2rem" />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default Recursos;
