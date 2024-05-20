import FolderToolBar from '@/components/FolderToolBar/FolderToolBar';
import LinkCard from '@/components/LinkCard/LinkCard';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './LinkCardList.module.scss';
import { FolderObj, LinkObj } from '@/utils/interfaces';
import { useState } from 'react';

interface LinkCardListProp {
  items: LinkObj[] | undefined;
  folders?: FolderObj[];
  folderNameOnClick: (id: number) => void;
  currentFolderId: number;
  onFolderAddClick: () => void;
  onFolderNameChangeClick: () => void;
  onFolderDeleteClick: () => void;
  onLinkDelete: (link: string) => void;
  onAddtoFolder: (link: string) => void;
  onShare: () => void;
}

export default function LinkCardList({
  items,
  folders,
  folderNameOnClick,
  currentFolderId,
  onFolderAddClick,
  onFolderNameChangeClick,
  onFolderDeleteClick,
  onLinkDelete,
  onAddtoFolder,
  onShare,
}: LinkCardListProp) {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchInput = (text: string) => {
    setSearchText(text);
  };

  function filterLinksByKeyword(keyword: string) {
    if (!items) return;
    if (searchText === '') return items;
    return items.filter(
      (item) =>
        item.url?.includes(keyword) ||
        item.description?.includes(keyword) ||
        item.title?.includes(keyword)
    );
  }

  const curItems = filterLinksByKeyword(searchText);

  return (
    <div className={styles.linkCardListContainer}>
      <div className={styles.contentWrapper}>
        <SearchBar onChange={handleSearchInput} searchText={searchText} />
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

        {curItems && curItems.length > 0 ? (
          <ul className={styles.linkCardList}>
            {curItems.map((item) => (
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
}
