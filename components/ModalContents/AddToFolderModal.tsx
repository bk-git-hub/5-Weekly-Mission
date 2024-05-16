import { ModalContentProps } from '@/utils/interfaces';
import styles from './ModalContents.module.scss';
import Button from '@/components/Button/Button';

export default function AddToFolderModal({
  folders,
  headerText,
  subHeaderText,
  buttonText,
}: ModalContentProps) {
  if (!folders) return;
  const curFolders = folders.slice(1); //전체 폴더를 제외시키기 위해서
  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <ul className={styles.folderList}>
        {curFolders.map((folder) => (
          <li key={folder.id}>
            <button className={styles.folderNameContainer}>
              <span className={styles.folderName}>{folder.name}</span>
              <span className={styles.linkCount}>
                {folder.link?.count}개 링크
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Button className={styles.modalButton}>{buttonText}</Button>
    </div>
  );
}
