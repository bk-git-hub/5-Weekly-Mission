import { useAuth } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LinkObj } from '@/utils/interfaces';

const useLinks = () => {
  const router = useRouter();
  const { userInfo } = useAuth();
  const [links, setLinks] = useState<LinkObj[]>([]);

  const folderId = router.query.slug ? router.query.slug[0] : -1;
  const getLinkList = async () => {
    if (!userInfo) return;

    const folderEndPoint =
      folderId && folderId !== -1 ? `?folderId=${folderId}` : '';
    const response = await axiosInstance.get(
      `/users/${userInfo.id}/links${folderEndPoint}`
    );
    setLinks(response.data.data);
  };

  useEffect(() => {
    getLinkList();
  }, [folderId, userInfo]);

  return { links };
};

export default useLinks;
