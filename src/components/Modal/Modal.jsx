import styles from './Modal.module.css';

export default function Modal({ children, onClose }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
        <button onClick={onClose} className={styles.closeButton}></button>
        {children}
      </div>
    </div>
  );
}
