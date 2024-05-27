/* eslint-disable react/prop-types */
import styles from "./RecursoPost.module.css";

const SubMenuPost = ({ title, href }) => {
  return (
    <a className={styles.postMenu} href={href}>
      <h4 className={styles.buttonTitle}>{title}</h4>
    </a>
  );
};

export default SubMenuPost;
