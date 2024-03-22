import styles from './CaseCounter.module.css'

// Define las constantes para los números de casos en camelCase
const numHechosVisualizados = 96;
const numSesiones = 80432;
const numPersonas = 8707;
const numDenuncias = 236;
const numHechosVerificados = 107;

const CaseCounter = () => {
  return (
    <div className={styles.contadorCasos}>
      <div className="contador-item">
        <h2>Hechos de Violencia Policial Decidimos Visualizar</h2>
        <p>{numHechosVisualizados}</p>
      </div>
      <div className="contador-item">
        <h2>Sesiones</h2>
        <p>{numSesiones}</p>
      </div>
      <div className="contador-item">
        <h2>Personas</h2>
        <p>{numPersonas}</p>
      </div>
      <div className="contador-item">
        <h2>Denuncias recibidas a través del formulario</h2>
        <p>{numDenuncias}</p>
      </div>
      <div className="contador-item">
        <h2>Hechos de Violencia Policial Verificados por el Mapa de la Policía</h2>
        <p>{numHechosVerificados}</p>
      </div>
    </div>
  );
};

export default CaseCounter;
