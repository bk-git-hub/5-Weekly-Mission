import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FolderInfoObj, UserInfoObj, LinkObj } from '@/utils/interfaces';
import SharedProfile from '@/components/SharedProfile/SharedProfile';
import SharedLinkCardList from '@/components/SharedLinkCardList/SharedLinkCardList';

export default function SharedPage() {
  const router = useRouter();
  const { folderId } = router.query;
  const [folderInfo, setFolderInfo] = useState<FolderInfoObj | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfoObj | null>(null);
  const [links, setLinks] = useState<LinkObj[]>([]);
  console.log('Folder ID:', folderId);

  const loadSharedPage = async (folderId: any) => {
    if (!folderId) return;
    const response = await axiosInstance.get(`/folders/${folderId}`);
    setFolderInfo(response.data.data[0]);
  };

  const loadFolderInfo = async (folderInfo: FolderInfoObj | null) => {
    if (folderInfo) {
      getFolderOwnwer(folderInfo);
      getUserLinks(folderInfo.id);
    }
  };

  const getFolderOwnwer = async (folderInfo: FolderInfoObj | null) => {
    if (!folderInfo) return;
    const res = axiosInstance.get(`users/${folderInfo.user_id}`);
    setUserInfo((await res).data.data[0]);
  };

  const getUserLinks = async (folderId?: number) => {
    if (folderInfo) {
      const folderEndPoint =
        folderId && folderId !== -1 ? `?folderId=${folderId}` : '';
      const response = await axiosInstance.get(
        `/users/${folderInfo.user_id}/links${folderEndPoint}`
      );
      setLinks(response.data.data);
    }
  };

  useEffect(() => {
    loadSharedPage(folderId);
  }, [folderId]);

  useEffect(() => {
    loadFolderInfo(folderInfo);
  }, [folderInfo]);

  return (
    <div>
      {folderInfo && userInfo && (
        <SharedProfile userInfo={userInfo} folderName={folderInfo.name} />
      )}
      <SharedLinkCardList items={links} />
    </div>
  );
}
