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
          <p>
            El Mapa de la Policía es una herramienta de cuidados ciudadanos para
            contrarrestar la violencia policial. En un contexto de creciente
            deterioro social y de un avance represivo que amenaza los consensos
            democráticos, el Mapa apuesta a la organización desde abajo para
            denunciar y combatir la crueldad. Nuestra iniciativa parte de una
            intuición clave: democratizar la información y asumir el compromiso
            de dar testimonio es hoy un arma fundamental para enfrentar la
            opacidad de los poderes. Somos una red de personas y organizaciones
            que queremos construir estrategias novedosas de lucha por los
            derechos humanos.
          </p>
        </section>
      </section>
    </>
  );
};

export default Nosotrxs;
