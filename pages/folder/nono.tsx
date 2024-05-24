import LinkCardList from '@/components/LinkCardList/LinkCardList';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FolderObj, LinkObj } from '@/utils/interfaces';
import Modal from '@/components/Modal/Modal';
import styles from '@/styles/FolderPage.module.scss';
import {
  DeleteModal,
  FolderInputModal,
  ShareModal,
  AddToFolderModal,
} from '@/components/ModalContents';

const allFolder = {
  id: -1,
  name: '전체',
  user_id: -1,
};

export default function Folder() {
  const [currentFolderId, setCurrentFolderId] = useState(-1);
  const { userInfo, setUserInfo } = useUserInfo();
  const [folders, setFolders] = useState<FolderObj[]>([]);
  const [links, setLinks] = useState<LinkObj[]>();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement | null>(
    null
  );
  const router = useRouter();

  const loadUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/signin');
    }
    const response = await axiosInstance.get('/users', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setUserInfo(response.data.data[0]);
    setCurrentFolderId(-1);
  };

  const getUserFolders = async () => {
    if (userInfo) {
      const response = await axiosInstance.get(`/users/${userInfo.id}/folders`);
      allFolder.user_id = userInfo.id;
      setFolders([allFolder, ...response.data.data]);
    }
  };

  const getUserLinks = async (folderId?: number) => {
    if (userInfo) {
      const folderEndPoint =
        folderId && folderId !== -1 ? `?folderId=${folderId}` : '';
      const response = await axiosInstance.get(
        `/users/${userInfo.id}/links${folderEndPoint}`
      );
      setLinks(response.data.data);
    }
  };

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

  const handleFolderNameButtonClick = async (id: number) => {
    setCurrentFolderId(id);
    let result;
    try {
      result = await getUserLinks(id);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    getUserFolders();
    getUserLinks();
    console.log(folders);
    console.log(links);
  }, [userInfo]);

  return (
    <>
      {' '}
      {showModal && (
        <>
          <Modal onClose={() => setShowModal(false)}>{modalContent}</Modal>
          <div
            className={styles.overlay}
            onClick={() => setShowModal(false)}
          ></div>
        </>
      )}
      <LinkCardList
        folders={folders}
        items={links}
        currentFolderId={currentFolderId}
        folderNameOnClick={handleFolderNameButtonClick}
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
