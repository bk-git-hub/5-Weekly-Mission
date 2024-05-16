import styles from './Modal.module.css';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
        <button onClick={onClose} className={styles.closeButton}></button>
        {children}
      </div>
    </div>
  );
}
