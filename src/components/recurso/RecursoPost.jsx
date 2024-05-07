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
      <h4 className={styles.postTitle}>{title}</h4>
      {subtitle && <h5 className={styles.subtitle}>{subtitle}</h5>}
      <div className={styles.submenu}>
        <p className={styles.detail}>
          <span className={styles.detailType}>Dirección:</span> {Dirección}
        </p>
        <p className={styles.detail}>
          <span className={styles.detailType}>Teléfono:</span> {Teléfono}
        </p>
        <p className={styles.detail}>
          <span className={styles.detailType}>Email:</span> {Email}
        </p>
        {content && <p className={styles.content}>{content.toUpperCase()}</p>}
        {link && (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Más información
          </a>
        )}
      </div>
    </div>
  );
};

export default RecursoPost;
