import addIcon from '@assets/images/add_icon.svg';
import addIconWhite from '@assets/images/add_icon_white.svg';
import FolderToolBarButton from './FolderToolBarButton';
import styles from './FolderToolBar.module.css';
import UtilButton from './UtilButton';
import { UTIL_BUTTONS_PROPS } from './constants';
import { FolderObject } from '@utils/interfaces';
interface FolderToolBarProps {
  folders?: FolderObject[];
  currentFolderId?: number;
  folderNameOnClick: (id: number) => void;
  onFolderNameChangeClick: () => void;
  onFolderAddClick: () => void;
  onFolderDeleteClick: () => void;
  onShare: () => void;
}

export default function FolderToolBar({
  folders,
  currentFolderId,
  folderNameOnClick,
  onFolderAddClick,
  onFolderNameChangeClick,
  onFolderDeleteClick,
  onShare,
}: FolderToolBarProps) {
  const currentFolder = folders?.find(
    (folder) => folder.id === currentFolderId
  );
  const currentFolderName = currentFolder?.name;
  UTIL_BUTTONS_PROPS.share.onClick = onShare;
  UTIL_BUTTONS_PROPS.changeName.onClick = onFolderNameChangeClick;
  UTIL_BUTTONS_PROPS.delete.onClick = onFolderDeleteClick;

  return (
    <div className={styles.folderToolBarContainer}>
      <div className={styles.folderToolButtons}>
        <ul className={styles.folderNameButtons}>
          {folders?.map((item) => (
            <li key={item.id}>
              <FolderToolBarButton
                onClick={folderNameOnClick}
                id={item.id}
                isFocused={item.id === currentFolderId}
              >
                {item.name}
              </FolderToolBarButton>
            </li>
          ))}
        </ul>

        <button className={styles.folderAddButton} onClick={onFolderAddClick}>
          <span>폴더 추가</span>
          <img
            src={addIcon}
            alt='폴더 추가 아이콘'
            className={styles.addIcon}
          />
          <img
            src={addIconWhite}
            alt='폴더 추가 아이콘'
            className={styles.addIconWhite}
          />
        </button>
      </div>
      <div className={styles.folderNameBar}>
        <span className={styles.folderNameDisplay}>{currentFolderName}</span>
        <ul className={styles.utilButtons}>
          {Object.entries(UTIL_BUTTONS_PROPS).map(([key, btn]) => (
            <li key={btn.id}>
              {currentFolderId !== 0 && (
                <UtilButton
                  imgSrc={btn.imgSrc}
                  alt={btn.alt}
                  onClick={btn.onClick}
                >
                  {btn.btnText}
                </UtilButton>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
