'use client';

import Button from '@/components/Button/Button';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import Account from '@/components/Account/Account';
import { useAuth } from '@/contexts/UserInfoContext';
import { axiosInstance } from '@/utils/axiosInstance';
import { useEffect } from 'react';
import { useUserInfo } from '@/hooks/useUserInfo';
export default function Header() {
  const { signOut } = useAuth();
  const { user, setUserInfo } = useUserInfo();
  const loadUser = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const response = await axiosInstance.get('/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(response.data.data[0]);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerBar}>
        <Link className={styles.logoImageContainer} href={`/`}>
          <Image src='/assets/images/logo.svg' alt='Logo' fill />
        </Link>

        {user ? (
          <>
            <Account
              profileImgSource={user.image_source}
              userEmail={user.email}
            />
            <Button onClick={signOut}>로그아웃</Button>
          </>
        ) : (
          <Link href={'/signin'}>
            <Button className={styles.signInButton}>로그인</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
