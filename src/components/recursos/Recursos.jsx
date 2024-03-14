import Icons from '../iconos/Icons';
import { Link } from 'react-router-dom';
import styles from './Recursos.module.css';


const recursosItems = [
  { path: '/recursos-institucionales', icon: 'intitucionales' },
  { path: '/ante-detencion', icon: 'anteDetencion' },
  { path: '/guia-basica', icon: 'guia' },
  { path: '/recursos-genero', icon: 'genero' },
  { path: '/recursos-ambulantes', icon: 'ambulantes' },
  { path: '/recursos-migrantes', icon: 'migrantes' },
  { path: '/como-filmas', icon: 'filmar', }
];
const Recursos = () => {

    return(
    <>
      <section className={styles.recursosContainer}>
        <section className={styles.recursos}>
          {recursosItems.map((recursosItem, index) => (
            <Link key={index} to={recursosItem.path} className={styles.recursoContainer}>
              <Icons icon={recursosItem.icon} className={styles.icon} iconSize="2.2rem" />
              <h5 className={styles.iconName}>{recursosItem.icon}</h5>
            </Link>
          ))}

        </section>
      </section>
 
        </>
    );
}

export default Recursos