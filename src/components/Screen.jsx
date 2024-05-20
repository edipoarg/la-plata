import styles from "../styles/Screen.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Función para recortar texto si supera el límite de caracteres
const truncateText = (text, maxLength) => {
  // Asegúrate de que el texto no sea null ni undefined
  const safeText = text ?? ""; // Usa una cadena vacía si text es null o undefined
  if (safeText.length > maxLength) {
    return safeText.substring(0, maxLength) + "...";
  }
  return safeText;
};

const Screen = ({
  title,
  level,
  address,
  phone,
  age,
  circs,
  caseId,
  autority,
  grade,
}) => {
  return (
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen}>
        <section className={styles.ComisariaData}>
          <h3 className={styles.level}>{level}</h3>
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.address}>{address}</h4>
          <h4 className={styles.phone}>{phone}</h4>
          <h4 className={styles.age}>{age}</h4>
          <h4 className={styles.circs}>{truncateText(circs, 95)}</h4>

          {/* Renderizar solo si 'caseId' tiene datos */}
          {caseId && (
            <Link to={`/ficha/${caseId}`}>
              <h3 className={styles.moreButton}>Ver +</h3>
            </Link>
          )}
        </section>
      </section>

      {/* Renderizar solo si 'grade' y 'autority' tienen datos */}
      {(grade || autority) && (
        <section className={styles.autoridadData}>
          {grade && <h3 className={styles.grade}>{grade}</h3>}
          {autority && <h2 className={styles.autority}>{autority}</h2>}
        </section>
      )}
    </section>
  );
};

Screen.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  age: PropTypes.string,
  circs: PropTypes.string,
  caseId: PropTypes.string,
  autority: PropTypes.string,
  grade: PropTypes.string,
};

export default Screen;
