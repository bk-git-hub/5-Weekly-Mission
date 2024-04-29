import addIcon from '../../assets/images/add_icon.svg';
import addIconWhite from '../../assets/images/add_icon_white.svg';
import FolderToolBarButton from './FolderToolBarButton';
import styles from './FolderToolBar.module.css';
import UtilButton from './UtilButton';
import PropTypes from 'prop-types';

import shareIcon from '../../assets/images/share_icon.svg';
import penIcon from '../../assets/images/pen_icon.svg';
import deleteIcon from '../../assets/images/delete_icon.svg';

export default function FolderToolBar({
  folders,
  currentFolderId,
  folderNameOnClick,
  onFolderAddClick,
  onFolderNameChangeClick,
  onFolderDeleteClick,
  onShare,
}) {
  const currentFolder = folders.find((folder) => folder.id === currentFolderId);
  const currentFolderName = currentFolder.name;

  const UTIL_BUTTONS_PROPS = [
    {
      imgSrc: shareIcon,
      btnText: '공유',
      alt: '공유 아이콘',
      id: 1,
      onClick: onShare,
    },

    {
      imgSrc: penIcon,
      btnText: '이름 변경',
      alt: '이름 변경 아이콘',
      id: 2,
      onClick: onFolderNameChangeClick,
    },
    {
      imgSrc: deleteIcon,
      btnText: '삭제',
      alt: '삭제 아이콘',
      id: 3,
      onClick: onFolderDeleteClick,
    },
  ];

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
          {UTIL_BUTTONS_PROPS.map((btn) => (
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

FolderToolBar.propTypes = {
  folders: PropTypes.array,
  currentFolderId: PropTypes.number,
  folderNameOnClick: PropTypes.func,
};
