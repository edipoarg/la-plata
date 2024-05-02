import styles from "./Nosotros.module.css";

const Nosotrxs = () => {
  return (
    <>
      <section className={styles.nosotrxs}>
        <section className={styles.decoNosotrxs}> </section>

        <section className={styles.titulosNosotrxs}>
          <h1>
            MAPA <br /> DE LA <br /> POLICIA
          </h1>
          <h3>
            {" "}
            Red de Cuidados <br /> Contra la violencia policial
          </h3>
        </section>

        <section className={styles.logos}>
          <p>logos</p>
        </section>
        <section className={styles.bajadaNosotrxs}>
          <p>Texto del mapa</p>
        </section>
      </section>
    </>
  );
};

export default Nosotrxs;
