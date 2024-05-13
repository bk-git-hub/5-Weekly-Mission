import { useUserInfo } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useEffect, useContext } from 'react';

export default function Folder() {
  const { userInfo, setUserInfo } = useUserInfo();
  const loadUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    const response = await axiosInstance.get('/users', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setUserInfo(response.data.data[0]);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return <div>FolderPage</div>;
}
