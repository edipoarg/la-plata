
import {useState } from 'react';
import styles from './RecursoPost.module.css';

const RecursoPost = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <div className={styles.post} onClick={toggleExpand}>
      <h4 className={styles.postTitle}>{title}</h4>
      {expanded && <p className={styles.postContent}>{content}</p>}
    </div>
</>
  );
};

export default RecursoPost;
