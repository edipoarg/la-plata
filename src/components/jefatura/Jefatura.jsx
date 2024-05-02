import Styles from "./Jefatura.module.css";

const jefeGbierno = "Jorge Ma";

const Jefatura = () => {
  return (
    <>
      <section>
        <h3>Jefatura</h3>
        <section className={Styles.jefaturaGobierno}>
          <h4 className={Styles.institution}>Jefatura de gobierno</h4>
          <h4 className={Styles.autoridad}>{jefeGbierno}</h4>
        </section>
        <section>
          <h3>Jefatura</h3>
          <h4>Ministerio de seguridad</h4>
          <h3>Diego Kravetz</h3>
        </section>
        <section>
          <h3>Jefatura</h3>
          <h4>JEFATURA DE LA POLICIA DE LA CIUDAD DE BUENOS AIRES</h4>
          <h3>Gabriel Oska</h3>
        </section>
        Gabriel Oscar Berard
      </section>
    </>
  );
};

export default Jefatura;
