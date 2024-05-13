import Button from '../Button/Button';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';
import Account from '@/components/Account/Account';
import { useUserInfo } from '@/contexts/UserInfoContext';
export default function Header() {
  const { userInfo } = useUserInfo();
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerBar}>
          <Link className={styles.logoImageContainer} href={`/`}>
            <Image src='/assets/images/logo.svg' alt='Logo' fill />
          </Link>

          {userInfo ? (
            <Account
              profileImgSource={userInfo.image_source}
              userEmail={userInfo.email}
            />
          ) : (
            <Link href={'/signin'}>
              <Button className={styles.signInButton}>로그인</Button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
