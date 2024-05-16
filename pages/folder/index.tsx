import LinkCardList from '@/components/LinkCardList/LinkCardList';
import { useUserInfo } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FolderObj, LinkObj } from '@/utils/interfaces';

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
      const folderEndPoint = folderId ? `?folderId=${folderId}` : '';
      const response = await axiosInstance.get(
        `/users/${userInfo.id}/links${folderEndPoint}`
      );
      setLinks(response.data.data);
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
      <LinkCardList folders={folders} items={links} />
    </>
  );
}
