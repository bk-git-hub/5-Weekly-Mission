import AddLinkBar from '../../components/AddLinkBar/AddLinkBar';
import LinkCardList from '../../components/LinkCardList/LinkCardList';
import { getUserFolders, getUserLinks } from '../../utils/api';
import { useEffect, useState, useCallback } from 'react';
import './FolderPage.css';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';
import Modal from '../../components/Modal/Modal';
import DeleteModal from '../../components/ModalContents/DeleteModal';
import FolderInputModal from '../../components/ModalContents/FolderInputModal';
import ShareModal from '../../components/ModalContents/ShareModal';
import AddToFolderModal from '../../components/ModalContents/AddToFolderModal';
const allFolder = {
  id: 0,
  name: '전체',
  user_id: 1,
};

export default function FolderPage() {
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [folders, setFolders] = useState([allFolder]);
  const [links, setLinks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleFolderAddClick = () => {
    setShowModal(true);
    setModalContent(
      <FolderInputModal headerText={'폴더 추가'} buttonText={'추가하기'} />
    );
  };

  const handleFolderNameChangeClick = () => {
    setShowModal(true);
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    setModalContent(
      <FolderInputModal
        initialValue={currentFolder.name}
        headerText={'폴더 이름 변경'}
        buttonText={'변경하기'}
      />
    );
  };

  const handleFolderDeleteClick = () => {
    setShowModal(true);
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    setModalContent(
      <DeleteModal
        headerText={'폴더 삭제'}
        subHeaderText={currentFolder.name}
      />
    );
  };

  const handleLinkDeleteClick = (link) => {
    setShowModal(true);

    setModalContent(
      <DeleteModal headerText={'링크 삭제'} subHeaderText={link} />
    );
  };

  const handleAddToFolder = (link) => {
    setShowModal(true);

    setModalContent(
      <AddToFolderModal
        folders={folders}
        headerText={'폴더에 추가'}
        subHeaderText={link}
        buttonText={'추가하기'}
      />
    );
  };

  const handleShareClick = () => {
    setShowModal(true);
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    setModalContent(
      <ShareModal
        headerText={'폴더 공유'}
        subHeaderText={currentFolder.name}
        folderNum={currentFolder.id}
      />
    );
  };

  const handleLoad = useCallback(async () => {
    let result;
    try {
      result = await getUserFolders();
      setFolders([allFolder, ...result]);
    } catch (error) {}

    let links = [];
    try {
      result = await getUserLinks(0);
      for (const link of result) {
        links.push(convertObjectKeysToCamelCase(link));
      }
    } catch (error) {}

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
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          <div className={'overlay'} onClick={() => setShowModal(false)}></div>
        </>
      )}
      <AddLinkBar />
      <LinkCardList
        folders={folders}
        items={links}
        folderNameOnClick={handleFolderNameButtonClick}
        currentFolderId={currentFolderId}
        onFolderAddClick={handleFolderAddClick}
        onFolderNameChangeClick={handleFolderNameChangeClick}
        onFolderDeleteClick={handleFolderDeleteClick}
        onLinkDelete={handleLinkDeleteClick}
        onShare={handleShareClick}
        onAddtoFolder={handleAddToFolder}
      />
    </>
  );
}
