// TODO Ale tiene que arreglar todo este archivo
/* eslint-disable react/prop-types */
import styles from "./RecursoPost.module.css";

const RecursoPost = ({
  title,
  subtitle,
  Dirección,
  Teléfono,
  Email,
  content,
  link,
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.titleContainer}>
        <h4 className={styles.postTitle}>{title}</h4>
        {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      </div>
      <div className={styles.submenu}>
        <div className={styles.detail}>
          <h3 className={styles.detailType}>Dirección:</h3> {Dirección}
        </div>
        <div className={styles.detail}>
          <h3 className={styles.detailType}>Teléfono:</h3> {Teléfono}
        </div>
        <div className={styles.detail}>
          <h3 className={styles.detailType}>Email:</h3> {Email}
        </div>
        {content && <p className={styles.content}>{content}</p>}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        )}
      </div>
    </div>
  );
};

export default RecursoPost;
