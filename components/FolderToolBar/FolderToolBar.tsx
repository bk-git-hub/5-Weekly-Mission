import FolderToolBarButton from './FolderToolBarButton';
import styles from './FolderToolBar.module.scss';
import UtilButton from './UtilButton';
import { UTIL_BUTTONS_PROPS } from './constants';
import useFolders from './useFolders';
import { useCurrentFolder } from '@/pages/folder/containers/useCurrentFolder';
import { useRouter } from 'next/router';

const addIcon = '/assets/images/add_icon.svg';
const addIconWhite = '/assets/images/add_icon_white.svg';

export default function FolderToolBar() {
  const { folders } = useFolders();
  const { folderName, setFolderName } = useCurrentFolder();
  const router = useRouter();

  let currentFolderId = -1;

  if (router.query.slug) {
    currentFolderId = parseInt(router.query.slug[0]);
  }

  return (
    <div className={styles.folderToolBarContainer}>
      <div className={styles.folderToolButtons}>
        <ul className={styles.folderNameButtons}>
          {folders?.map((item) => (
            <li key={item.id}>
              <FolderToolBarButton
                onClick={() => {
                  setFolderName(item.name);
                  if (item.id < 0) {
                    router.push('/folder');
                    return;
                  }

                  router.push(`/folder/${item.id}`);
                }}
                id={item.id}
                isFocused={item.id == currentFolderId}
              >
                {item.name}
              </FolderToolBarButton>
            </li>
          ))}
        </ul>

        <button className={styles.folderAddButton} onClick={() => {}}>
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
        <span className={styles.folderNameDisplay}>{folderName}</span>
        <ul className={styles.utilButtons}>
          {Object.entries(UTIL_BUTTONS_PROPS).map(([key, btn]) => (
            <li key={btn.id}>
              {currentFolderId !== -1 && (
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
