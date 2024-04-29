import FolderToolBar from '../FolderToolBar/FolderToolBar';
import LinkCard from '../LinkCard/LinkCard';
import SearchBar from '../SearchBar/SearchBar';
import styles from './LinkCardList.module.css';

const LinkCardList = ({
  items,
  searchOnSubmit,
  folders,
  folderNameOnClick,
  currentFolderId,
  onFolderAddClick,
  onFolderNameChangeClick,
  onFolderDeleteClick,
  onLinkDelete,
  onAddtoFolder,
  onShare,
}) => {
  return (
    <div className={styles.linkCardListContainer}>
      <div className={styles.contentWrapper}>
        <SearchBar onSubmit={searchOnSubmit} />
        {folders && (
          <FolderToolBar
            folders={folders}
            folderNameOnClick={folderNameOnClick}
            currentFolderId={currentFolderId}
            onFolderAddClick={onFolderAddClick}
            onFolderNameChangeClick={onFolderNameChangeClick}
            onFolderDeleteClick={onFolderDeleteClick}
            onShare={onShare}
          />
        )}

        {items.length > 0 ? (
          <ul className={styles.linkCardList}>
            {items.map((item) => (
              <li key={item.id}>
                <LinkCard
                  linkCardInfo={item}
                  onAddToFolder={onAddtoFolder}
                  onLinkDelete={onLinkDelete}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noSavedLink}>저장된 링크가 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default LinkCardList;
