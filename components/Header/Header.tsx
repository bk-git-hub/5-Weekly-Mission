import Button from '../Button/Button';
import Image from 'next/image';
import styles from './Header.module.css';
export default function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerBar}>
          <div className={styles.logoImageContainer}>
            <Image src='/assets/images/logo.svg' alt='Logo' fill />
          </div>
          <Button>{'로그인'}</Button>
        </div>
      </header>
    </>
  );
}
