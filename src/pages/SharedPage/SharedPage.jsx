import { useEffect, useState } from 'react';
import { getFolderInfo } from '../../utils/api';
import FolderInfo from '../../components/FolderInfo/FolderInfo';
import LinkCardList from '../../components/LinkCardList/LinkCardList';
import './SharedPage.css';
import { SEARCH_INPUT_ID } from '../../components/SearchBar/SearchBar';

const STYLE_FOLDER_CONTAINER_CLASS_NAME = 'folder-container';

export default function SharedPage() {
  const [ownerInfo, setOwnerInfo] = useState({});
  const [folderName, setFolderName] = useState('');
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchValue(e.target[SEARCH_INPUT_ID].value);
  };

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderInfo();
    } catch (error) {}

    const { name, owner, links } = result;
    setFolderName(name);

    if (searchValue !== '') {
      setItems(searchTMP(links, searchValue));
    } else {
      setItems(links);
    }
    setOwnerInfo(owner);
  };

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className={STYLE_FOLDER_CONTAINER_CLASS_NAME}>
      <FolderInfo
        ownerName={ownerInfo.name}
        profileImgSource={ownerInfo.profileImageSource}
        folderName={folderName}
      />
      <LinkCardList items={items} searchOnSubmit={handleSearchSubmit} />
    </div>
  );
}

function searchTMP(items, searchValue) {
  const searchProperties = ['title', 'description', 'url'];

  const searchedItems = items.filter((item) =>
    searchProperties.some((property) =>
      containsSubstring(item[property], searchValue)
    )
  );
  return searchedItems;
}

function containsSubstring(string, substring) {
  return string.toLowerCase().includes(substring.toLowerCase());
}
