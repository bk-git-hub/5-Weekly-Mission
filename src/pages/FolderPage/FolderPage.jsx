import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';
import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { getUserFolders, getUserLinks } from '../../utils/api';
import { useEffect, useState, useCallback } from 'react';
import './FolderPage.css';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';

const allFolder = {
  'id': 0,
  'name': '전체',
  'user_id': 1,
};

export default function FolderPage() {
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [folders, setFolders] = useState([allFolder]);
  const [links, setLinks] = useState([]);

  const handleLoad = useCallback(async () => {
    let result;
    try {
      result = await getUserFolders();
    } catch (error) {}
    setFolders([allFolder, ...result]);
    try {
      result = await getUserLinks(0);
    } catch (error) {}
    let links = [];
    for (const link of result) {
      links.push(convertObjectKeysToCamelCase(link));
    }
    setLinks(links);
    setCurrentFolderId(0);
  }, []);

  const handleFolderNameButtonClick = async (id) => {
    setCurrentFolderId(id);
    let result;
    try {
      result = await getUserLinks(id);
    } catch (error) {}
    let links = [];
    for (const link of result) {
      links.push(convertObjectKeysToCamelCase(link));
    }
    setLinks(links);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <AddLinkBar />
      <LinkCardList
        folders={folders}
        items={links}
        folderNameOnClick={handleFolderNameButtonClick}
        currentFolderId={currentFolderId}
      />
    </>
  );
}
