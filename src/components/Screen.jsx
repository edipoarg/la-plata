import styles from "../styles/Screen.module.css";
import { Link } from "react-router-dom";

// Función para recortar texto si supera el límite de caracteres
const truncateText = (text, maxLength) => {
  // Asegúrate de que el texto no sea null ni undefined
  const safeText = text ?? ""; // Usa una cadena vacía si text es null o undefined
  if (safeText.length > maxLength) {
    return safeText.substring(0, maxLength) + "...";
  }
  return safeText;
};

const Screen = ({ title, level, adress, phone, age, circs, caseId }) => {
  return (
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen}>
        <section className={styles.ComisariaData}>
          <h3 className={styles.level}>{level}</h3>
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.adress}>{adress}</h4>
          <h4 className={styles.phone}>{phone}</h4>
          <h4 className={styles.age}>{age}</h4>
          <h4 className={styles.circs}>{truncateText(circs, 120)}</h4>

          <Link to={`/ficha/${caseId}`}>
            <h3 className={styles.moreButton}>Ver +</h3>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Screen;
