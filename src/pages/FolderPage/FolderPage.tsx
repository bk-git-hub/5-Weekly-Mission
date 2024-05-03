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
import { FolderObject } from '../../utils/interfaces';
const allFolder = {
  id: 0,
  name: '전체',
  user_id: 1,
};

export default function FolderPage() {
  const [currentFolderId, setCurrentFolderId] = useState(0);
  const [folders, setFolders] = useState<FolderObject[]>([allFolder]);
  const [links, setLinks] = useState<{ [key: string]: any }[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(
    null
  );

  const handleFolderAddClick = () => {
    setShowModal(true);
    setModalContent(
      <FolderInputModal headerText={'폴더 추가'} buttonText={'추가하기'} />
    );
  };

  const handleFolderNameChangeClick = () => {
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    if (!currentFolder) return;
    setShowModal(true);
    setModalContent(
      <FolderInputModal
        initialValue={currentFolder.name}
        headerText={'폴더 이름 변경'}
        buttonText={'변경하기'}
      />
    );
  };

  const handleFolderDeleteClick = () => {
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    if (!currentFolder) return;
    setShowModal(true);
    setModalContent(
      <DeleteModal
        headerText={'폴더 삭제'}
        subHeaderText={currentFolder.name}
      />
    );
  };

  const handleLinkDeleteClick = (link: string) => {
    setShowModal(true);

    setModalContent(
      <DeleteModal headerText={'링크 삭제'} subHeaderText={link} />
    );
  };

  const handleAddToFolder = (link: string) => {
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
    const currentFolder = folders.find(
      (folder) => folder.id === currentFolderId
    );
    if (!currentFolder) return;
    setShowModal(true);
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
    } catch (error) {
      return;
    }

    let links = [];
    try {
      result = await getUserLinks(0);
      for (const link of result) {
        links.push(convertObjectKeysToCamelCase(link));
      }
    } catch (error) {
      return;
    }
    setLinks(links);
    setCurrentFolderId(0);
  }, []);

  const handleFolderNameButtonClick = async (id: number) => {
    setCurrentFolderId(id);
    let result;
    try {
      result = await getUserLinks(id);
    } catch (error) {
      return;
    }
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
