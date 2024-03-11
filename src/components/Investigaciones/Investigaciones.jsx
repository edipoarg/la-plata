import styles from "./investigaciones.module.css";
import Temas from '../Temas';


const tituloNotaPrincipal = "Titulo de la ultima invtegicacion con un largo máximo de esa cantidad de caracteres: esta cantidad.";
    const bajadaNotaPrincipal = "Bajada de la ultima nota que se haya hecho donde el texto puede durar solamente esta cantidad máxima de caracteres";
    const fechaUltimoReporte = "xx/xx/xxxx";



const Investigaciones = () => {

    return(
        <>

            <section className={styles.investNovedades}>
             <section style= {Temas.invest2Tema} className={styles.notaPrincipal}>
        
                 <img src="" alt="" className={styles.fotoNotaPrincipal} />
                 <section className={styles.infoNotaPrincipal}>
                 <h2 className={styles.tituloNotaPrincipal}>
                    {tituloNotaPrincipal}</h2>
                    <h5>{bajadaNotaPrincipal}</h5>
                    </section>
             </section>
             <section style= {Temas.reportesTema} className={styles.ultimoReporteContainer}>
                <img src="" alt="" className={styles.fotoUltimoReporte} />
              <section className={styles.datosReporte}>
                <h4>{fechaUltimoReporte}</h4>
                <h2 className={styles.tituloUltimoReporte}>
                    Ultimo Reporte</h2>
                    <h4>de violencia policial</h4>
                    </section>
             </section>
              
                <section className={styles.investMore}>
                
             <section style= {Temas.investTema} className={styles.podcastContainer}>
                <h2 className={styles.tituloPodcast}>
                    Podcast</h2>
                <div>
                    <h5>ir</h5>
                </div>
             </section>
             <section style= {Temas.investTema} className={styles.autorxsContainer}>
                <h2 className={styles.tituloAutorxs}>
                    Autorxs</h2>
                <div>
                </div>
             </section>
             </section>


             <section style= {Temas.investTema} className={styles.todasInvestLink}>
                <h5>flecha</h5>
             </section>
            </section>

            





        </>
    );
}

export default Investigaciones