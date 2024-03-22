import CaseCounter from "./CaseCounter";
import styles from './Reportes.module.css';

const Reportes = () => {
  const numeroReporte = 4; // Definimos numeroReporte como una constante con el valor 4
  const fecha = 'fecha';
  const bajada = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies.';
  const tituloSistematico = 'titulo SISTEMATICO';
  const tituloPolitico = 'titulo politico';
  const subtituloPolitico = 'subtitulo politico';

  return (
    <div className={styles.reportContainer}>
      {/* Parte Intro */}
      <section className={styles.indexContainer}>
        <section className={styles.index}>
          <section className={styles.reportData}>
            <h2>{numeroReporte}° reporte de violencia policial</h2>
            <h3>Fecha: {fecha}</h3>
            <h5>Bajada: {bajada}</h5>
            <button>Metodología</button>
          </section>
          <section className={styles.reportMenu}>
            <div className={styles.reportItem}>
              <h3>Geolocalización</h3>
              <h5>de los casos de violencia recibidos por el Mapa.</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>ANÁLISIS DE UNA PRÁCTICA SISTEMÁTICA</h3>
              <h5>{tituloSistematico}</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>{tituloPolitico}</h3>
              <h5>{subtituloPolitico}</h5>
            </div>
          </section>
        </section>
        <section className="reportCases">
          <CaseCounter />
        </section>
      </section>

      {/* Casos Singulares */}
      <div className={styles.singularCaseContainer}>
        {/* Aquí puedes agregar los casos singulares según sea necesario */}
      </div>

      {/* Caso de Violencia Sistématica */}
      <div className={styles.sistematicContainer}>
        {/* Detalles de la violencia sistématica */}
      </div>

      {/* Análisis Político */}
      <div className={styles.politicContainer}>
        {/* Detalles del análisis político */}
      </div>

      {/* Contador de Casos */}

    </div>
  );
};

export default Reportes;
