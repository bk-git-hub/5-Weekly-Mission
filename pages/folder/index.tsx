import { useUserInfo } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Folder() {
  const { userInfo, setUserInfo } = useUserInfo();
  const [folders, setFolders] = useState();
  const [links, setLinks] = useState();
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
  };

  const getUserFolders = async () => {
    if (userInfo) {
      const response = await axiosInstance.get(`/users/${userInfo.id}/folders`);
      setFolders(response.data.data);
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
  }, [userInfo]);

  return <div>FolderPage</div>;
}
