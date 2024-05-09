import Link from 'next/link';
import styles from '@/styles/AuthPage.module.css';
import Image from 'next/image';

export default function SignUp() {
  return (
    <>
      <main className={styles.authPage}>
        <div className={styles.authPageContainer}>
          <div className={styles.authPageHeader}>
            <Link href={'/'} className={styles.logo}>
              <Image src={'/assets/images/logo.svg'} fill alt='Linkbrary' />
            </Link>

            <div className={styles.membershipPromptBar}>
              <span className={styles.membershipPromptText}>
                이미 회원이신가요??
              </span>
              <Link href={'/signin'} className={styles.membershipPromptLink}>
                로그인 하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
