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
      <h3>{numHechosVisualizados}</h3>
        <p>Hechos de Violencia Policial Decidimos Visualizar</p>
      </div>
      <div className="contador-item">
      <h3>{numSesiones}</h3>
        <p>Sesiones</p>
      </div>
      <div className="contador-item">
      <h3>{numPersonas}</h3>
        <p>Personas</p>
      </div>
      <div className="contador-item">
      <h3>{numDenuncias}</h3>

        <p>Denuncias recibidas a través del formulario</p>
      </div>
      <div className="contador-item">
        <h3>{numHechosVerificados}</h3>
        <p>Hechos de Violencia Policial Verificados por el Mapa de la Policía</p>

      </div>
    </div>
  );
};

export default CaseCounter;
