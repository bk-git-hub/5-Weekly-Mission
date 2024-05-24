import { ModalContentProps } from '@/utils/interfaces';
import styles from './ModalContents.module.scss';

export default function DeleteModal({
  headerText,
  subHeaderText,
}: ModalContentProps) {
  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <button className={styles.deleteButton}>삭제하기</button>
    </div>
  );
}
