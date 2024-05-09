import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h2 className={styles.mainHeading}>
          <em className={styles.gradient1}>세상의 모든 정보</em>를<br />
          <span>쉽게 저장하고</span>
          관리해 보세요
        </h2>
      </main>
    </>
  );
}
