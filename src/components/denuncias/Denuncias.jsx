import { Link } from 'react-router-dom';

import styles from './Denuncias.module.css';
import Temas from '../Temas';

const Denuncias = () => {
    return (
        <>
            <section className={styles.denuncias}>

                <section style={Temas.denunciasTema} className={styles.hacerDenunciasContainer} >
                <Link to="/denuncia">
                    <h2 className={styles.title1}>QUIERO  <br />DENUNCIAR</h2>
                    <h4 className={styles.subTitle}>Un hecho de violencia policial <br /> como víctima o testigo</h4>
                    </Link>
                </section>

                <section className={styles.denunciasMore}>

                    <section className={styles.hacerOtrasDenunciasContainer}>
                        <section className={styles.otrasDenunciasContainer} style={Temas.denunciasTema}>
                        <Link to="/genero">

                            <h4 className={styles.subTitle}>Si no te toman <br /> la denuncia por</h4>
                            <h3 className={styles.title2}>Violencia de género</h3>
                            </Link>

                        </section>
            

                        <section className={styles.otrasDenunciasContainer} style={Temas.denunciasTema}>
                        <Link to="/colectiva">
                            <h3 className={styles.title2}> Denunciá <br /> colectivamente</h3>
                            </Link>

                        </section>
                    </section>

                    <Link to="/ultimo-reporte">
                    <section className={styles.reportesDenunciasContainer} style={Temas.reportesTema}>
                    
                        <section className={styles.imagenUltimoReporte} >
                            <img src="ruta_de_la_imagen.jpg" alt="fotoUltimoReporte" />
                            <div className={styles.reporteAlertIcon} ></div>
                        </section>
                        <section className={styles.reporteTitle}>
                        <h2 className={styles.title3}>Reportes</h2> <h3 className={styles.subTitle2}> <br /> de <br /> violencia <br /> policial</h3>
                        </section>

                    </section>
                    </Link>

                </section>
            </section>
        </>
    );
}

export default Denuncias;
