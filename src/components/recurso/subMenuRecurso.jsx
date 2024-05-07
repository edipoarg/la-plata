import styles from "./RecursoPost.module.css";

const SubMenuPost = ({ title, onClick }) => {
  return (
    <>
      <a className={styles.postMenu} onClick ={onClick }>
        <h4 className={styles.buttonTitle}>{title}</h4>
      </a>
    </>
  );
};

export default SubMenuPost;
