import CaseCounter from "./CaseCounter";
import styles from "./Reportes.module.css";

const Reportes = () => {
  const numeroReporte = 4; // Definimos numeroReporte como una constante con el valor 4
  const fecha = "8 de Mayo 2024";
  const bajada = [
    "El 11 de julio se lanzó en la Legislatura porteña el Mapa de la Policía, herramienta digital que propone construir una RED DE CUIDADOS CONTRA LA VIOLENCIA POLICIAL.",
    "El principal objetivo de la iniciativa es VISIBILIZAR EL ABUSO para evitar que se naturalice.",
  ];
  const tituloSistematico = "titulo SISTEMATICO";
  const tituloPolitico = "titulo politico";
  const subtituloPolitico = "subtitulo politico";

  return (
    <div className={styles.reportContainer}>
      {/* Parte Intro */}
      <section className={styles.indexContainer}>
        <section className={styles.index}>
          <section className={styles.reportData}>
            <h2>{numeroReporte}° reporte de violencia policial</h2>
            <h3>{fecha}</h3>
            <h5>{bajada}</h5>
            <section className={styles.subMenu}>
              <h5 className={styles.Button}>Metodología</h5>
              <h5 className={styles.Button}>Reportes Anteriores</h5>
            </section>
          </section>
          <section className={styles.reportMenu}>
            <div className={styles.reportItem}>
              <h3>Geolocalización</h3>
              <h5>de los casos de violencia recibidos por el Mapa.</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>Análisis de una práctica sistemática</h3>
              <h5>{tituloSistematico}</h5>
            </div>
            <div className={styles.reportItem}>
              <h3>{tituloPolitico}</h3>
              <h5>{subtituloPolitico}</h5>
            </div>
          </section>
        </section>
        <section className="reportCases">
          <div className={styles.reportImage}></div>
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
