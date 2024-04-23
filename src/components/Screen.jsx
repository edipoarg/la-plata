import styles from "../styles/Screen.module.css";

const Screen = ({ title, level, adress, phone, age, circs }) => {
  return (
    <section className={styles.Screen}>
      <section className={styles.ComisariaScreen}>
        <section className={styles.ComisariaData}>
          <h3 className={styles.level}>{level}</h3>
          <h2 className={styles.title}>{title}</h2>
          <h4 className={styles.adress}>{adress}</h4>
          <h4 className={styles.phone}>{phone}</h4>
          <h4 className={styles.age}>{age}</h4>
          <h4 className={styles.circs}>{circs}</h4>


        </section>
      </section>
    </section>
  );
};

export default Screen;
