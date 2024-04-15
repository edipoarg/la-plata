import { Link } from 'react-router-dom';

import styles from './Denuncias.module.css';
import Temas from '../Temas';
import Icons from '../iconos/Icons';
import Reportes from '../reportes/Reportes';

const Denuncias = () => {
    return (
        <>
            <section className={styles.denuncias}>

                <section className={styles.titleContainer} >
                <Link to="/denuncia">
                    <h2 className={styles.title}>QUIERO  <br />DENUNCIAR</h2>
                    <h4 className={styles.subTitle}>Un hecho de violencia policial <br /> como víctima o testigo</h4>
                    </Link>
                </section>

                <section className={styles.menuContainer}>

                 <section className={styles.menu}>

                    <Link to="/denuncia">
                    <section className={styles.buttonContainer} >
                        <h3 className={styles.buttonText}> Invidivdual</h3>
                    </section>
                    </Link>

                    <Link to="/colectiva">
                    <section className={styles.buttonContainer} >
                        <h3 className={styles.buttonText}> Colectiva</h3>
                    </section>
                    </Link>
                    
                    <Link to="/genero" className={styles.genderButton}>
                    <section className={styles.buttonContainer} >
                        <div className={styles.genderContainer}>
                         <h4 className={styles.genderSubTitle}>No te toman <br /> la denuncia por</h4>
                         <h3 className={styles.genderTitle}>Violencia de género</h3>
                        </div>
                    </section>
                    </Link>         
                        
                 </section>

                    <Link to="/reportes">
                    <section className={styles.reportesDenunciasContainer}>
                    
                        <section className={styles.imagenUltimoReporte} >
                        <Icons icon={"reportes"} className={styles.icon} iconSize="2.2rem" />
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
