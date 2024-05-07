// TODO Ale tiene que arreglar este archivo
/* eslint-disable react/prop-types */
import styles from "./RecursoPost.module.css";

const SubMenuPost = ({ title }) => {
  return (
    <>
      <div className={styles.postMenu}>
        <h4 className={styles.buttonTitle}>{title}</h4>
      </div>
    </>
  );
};

export default SubMenuPost;
