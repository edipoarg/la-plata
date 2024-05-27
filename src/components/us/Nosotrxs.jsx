/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "./Nosotros.module.css";
import Logos from "../logos/Logos";
import LogoMapaSmall from "../LogoMapaSmall";
const listaDeLogos = [
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_d747ae680b0746b29da1b1b6af4fa3a3~mv2.png/v1/fill/w_329,h_111,al_c,lg_1,q_85,enc_auto/cels.png",
    link: "https://violenciapolicial.org.ar/",
    name: "cels",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_60cc128a42c04e25a01af532b67db0c3~mv2.png/v1/fill/w_322,h_88,al_c,lg_1,q_85,enc_auto/crisis.png",
    link: "https://revistacrisis.com.ar/",
    name: "crisis",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_cbbcb1c232cc4b4bb2b25a790578bc20~mv2.png/v1/fill/w_288,h_279,al_c,lg_1,q_85,enc_auto/correpi.png",
    link: "https://www.correpi.org/",
    name: "correpi",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_1d45cf506977405bb89e3771316891e9~mv2.png/v1/fill/w_335,h_125,al_c,lg_1,q_85,enc_auto/mte.png",
    link: "https://mteargentina.org.ar/",
    name: "mte",
  },
  {
    image:
      "https://static.wixstatic.com/media/0f4ca0_b8be17973f924afda3560a3a807e5bb9~mv2.png/v1/fill/w_364,h_71,al_c,lg_1,q_85,enc_auto/nuestraAmerica.png",
    link: "enlace2",
    name: "nuestra america",
  },

  { image: "puntoDeFuga.png", link: "enlace2", name: "punto de fuga" },
  { image: "puntoDeFuga.png", link: "enlace2", name: "la tribu" },
  { image: "puntoDeFuga.png", link: "enlace2", name: "grito del sur" },
  { image: "puntoDeFuga.png", link: "enlace2", name: "emergentes derecho" },
  { image: "puntoDeFuga.png", link: "enlace2", name: "acvi" },
];

const Nosotrxs = () => {
  return (
    <>
      <section className={styles.nosotrxsContainer}>
        <section className={styles.header}>
          <div className={styles.box}>
            <h3 className={styles.deco}>////////////////////</h3>
            <LogoMapaSmall />
            <section className={styles.sloganContainer}>
              <h5 className={styles.slogan}>
                RED DE CUIDADOS CIUDADANOS CONTRA LA VIOLENCIA POLICIAL
              </h5>
            </section>
          </div>

          <section className={styles.bajadaNosotrxs}>
            <p className={styles.bajada}>
              El Mapa de la Policía es una herramienta de cuidados ciudadanos
              para contrarrestar la violencia policial. En un contexto de
              creciente deterioro social y de un avance represivo que amenaza
              los consensos democráticos, el Mapa apuesta a la organización
              desde abajo para denunciar y combatir la crueldad. Nuestra
              iniciativa parte de una intuición clave: democratizar la
              información y asumir el compromiso de dar testimonio es hoy un
              arma fundamental para enfrentar la opacidad de los poderes. Somos
              una red de personas y organizaciones que queremos construir
              estrategias novedosas de lucha por los derechos humanos.
            </p>
          </section>
        </section>

        <Logos logos={listaDeLogos} />

        <div className={styles.thinLine} />
        <div className={styles.develop}>
          {" "}
          <h4>DESAROLLADA X EDIPO</h4>
        </div>
      </section>
    </>
  );
};

export default Nosotrxs;
