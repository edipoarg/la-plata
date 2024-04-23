import styles from './RecursoPost.module.css';

const SubMenuPost = ({ title, link }) => {
  return (
    <>
    <div className={styles.postMenu}>
      <h4 className={styles.buttonTitle}>{title}</h4>
    </div>    
   
    </>
  );
};

export default SubMenuPost;
