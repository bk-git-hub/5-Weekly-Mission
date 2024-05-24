import { useUserInfo } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { FolderObj } from '@/utils/interfaces';
import { useEffect, useState } from 'react';

const useFolders = () => {
  const [folders, setFolders] = useState<FolderObj[]>();
  const { userInfo } = useUserInfo();

  const allFolder = {
    id: -1,
    name: '전체',
    user_id: -1,
  };

  const getFolderList = async () => {
    if (!userInfo) return;
    const res = await axiosInstance.get(`/users/${userInfo.id}/folders`);
    const folderList = res.data.data;
    setFolders([allFolder, ...folderList]);
  };

  useEffect(() => {
    getFolderList();
  }, [userInfo]);

  return { folders };
};

export default useFolders;
