import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Icons from '../iconos/Icons';

const Navbar = () => {
  const iconList = [ 'denuncias', 'recursos', 'investigaciones', 'menu'];

  return (
    <section id="NavBar" className={styles.Navbar}>
     <section> Logo </section>
      {iconList.map((icon, index) => (
        <Link to={`/${icon}`} key={index}>
          <Icons icon={icon} className={styles.Boton} iconSize="2rem" />
        </Link>
      ))}
    </section>
  );
};

export default Navbar;
