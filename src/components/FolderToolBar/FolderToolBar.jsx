import addIcon from '../../assets/images/add_icon.svg';
import addIconWhite from '../../assets/images/add_icon_white.svg';
import FolderToolBarButton from './FolderToolBarButton';
import styles from './FolderToolBar.module.css';
import { UTIL_BUTTONS_PROPS } from './constants';
import UtilButton from './UtilButton';
import PropTypes from 'prop-types';

export default function FolderToolBar({
  folders,
  currentFolderId,
  folderNameOnClick,
}) {
  const currentFolder = folders.find((folder) => folder.id === currentFolderId);
  const currentFolderName = currentFolder.name;

  return (
    <div className={styles.folderToolBarContainer}>
      <div className={styles.folderToolButtons}>
        <ul className={styles.folderNameButtons}>
          {folders.map((item) => (
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

        <button className={styles.folderAddButton}>
          <span>폴더 추가</span>
          <img
            src={addIcon}
            alt="폴더 추가 아이콘"
            className={styles.addIcon}
          />
          <img
            src={addIconWhite}
            alt="폴더 추가 아이콘"
            className={styles.addIconWhite}
          />
        </button>
      </div>
      <div className={styles.folderNameBar}>
        <span className={styles.folderNameDisplay}>{currentFolderName}</span>
        <ul className={styles.utilButtons}>
          {UTIL_BUTTONS_PROPS.map((btn) => (
            <li key={btn.id}>
              {currentFolderId !== 0 && (
                <UtilButton imgSrc={btn.imgSrc} alt={btn.alt}>
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

FolderToolBar.propTypes = {
  folders: PropTypes.array,
  currentFolderId: PropTypes.number,
  folderNameOnClick: PropTypes.func,
};
