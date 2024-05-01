import styles from './ModalContents.module.css';
import Button from '../Button/Button';
import { FolderObject } from '../../utils/interfaces';

interface AddToFolderModalProps {
  folders: FolderObject[];
  headerText: string;
  subHeaderText: string;
  buttonText: string;
}

export default function AddToFolderModal({
  folders,
  headerText,
  subHeaderText,
  buttonText,
}: AddToFolderModalProps) {
  const curFolders = folders.slice(1);
  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.modalHeaderWrapper}>
        <span className={styles.modalHeader}>{headerText}</span>
        <span className={styles.modalSubHeader}>{subHeaderText}</span>
      </div>
      <ul className={styles.folderList}>
        {curFolders.map((folder) => (
          <li>
            <button className={styles.folderNameContainer}>
              <span className={styles.folderName}>{folder.name}</span>
              <span className={styles.linkCount}>
                {folder.link.count}개 링크
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Button className={styles.modalButton}>{buttonText}</Button>
    </div>
  );
}
