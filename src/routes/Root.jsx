
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import styles from './Root.module.css';

export default function Root() {
    return (
        <>

<section  className={styles.root}>
<Navbar/> {/* Navbar siempre se muestra */}

<Outlet/>
</section>
</>
  );
}