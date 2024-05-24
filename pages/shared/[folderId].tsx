import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface FolderInfoObj {
  created_at: string;
  favorite: boolean;
  id: number;
  name: string;
  user_id: number;
}

interface UserInfoObj {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
}

export default function SharedPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const [folderInfo, setFolderInfo] = useState<FolderInfoObj | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoObj | null>(null);
  console.log('Folder ID:', folderId);

  const loadSharedPage = async (folderId: any) => {
    if (!folderId) return;
    const response = await axiosInstance.get(`/folders/${folderId}`);
    setFolderInfo(response.data.data[0]);
  };

  const getFolderOwnwer = async (folderInfo: FolderInfoObj | null) => {
    if (!folderInfo) return;
    const res = axiosInstance.get(`users/${folderInfo.user_id}`);
    setUserInfo((await res).data.data[0]);
  };

  useEffect(() => {
    loadSharedPage(folderId);
  }, [folderId]);

  useEffect(() => {
    getFolderOwnwer(folderInfo);
  }, [folderInfo]);

  return (
    <div>
      <h1>Shared Page</h1>
      <p>Folder ID: {folderId}</p>
      {folderInfo && <p>{folderInfo.user_id}</p>}
    </div>
  );
}
