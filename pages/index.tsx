import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/UserInfoContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter(); // Access the router object
  const { userInfo } = useAuth();
  const handleAddLinkClick = () => {
    userInfo ? router.push('/folder') : router.push('/signup'); // Navigate to /signup route when button is clicked
  };

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.mainSection}>
          <h2 className={styles.mainHeading}>
            <em className={styles.gradient1}>세상의 모든 정보</em>를<br />
            <span>쉽게 저장하고</span>
            관리해 보세요
          </h2>
          <Button className={styles.addLinkButton} onClick={handleAddLinkClick}>
            링크 추가하기
          </Button>
          <div className={styles.mainImageWrapper}>
            <Image
              src='/assets/images/homeImage.png'
              fill
              alt='Page Example Image'
            />
          </div>
        </section>
        <section className={styles.featureSection}>
          <div className={styles.featureCard}>
            <div className={styles.featureDescription}>
              <h3 className={styles.featureDescriptionHeading}>
                <em className={styles.gradient2}>원하는 링크</em>를 저장하세요
              </h3>
              <p>
                나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
                싶은 모든 것을 한 공간에 저장하세요.
              </p>
            </div>

            <Image
              src={'/assets/images/feature1.png'}
              width={550}
              height={450}
              alt='Link Save Feature example'
            />
          </div>

          <div className={styles.featureCard}>
            <Image
              src={'/assets/images/feature2.png'}
              width={550}
              height={450}
              alt='Link Manage Feature example'
            />

            <div className={styles.featureDescription}>
              <h3 className={styles.featureDescriptionHeading}>
                링크를 폴더로
                <em className={styles.gradient3}>관리</em>하세요
              </h3>
              <p>
                나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
              </p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureDescription}>
              <h3 className={styles.featureDescriptionHeading}>
                저장한 링크를
                <em className={styles.gradient4}>공유</em>해 보세요.
              </h3>
              <p>
                여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                동료들에게 쉽고 빠르게 링크를 공유해 보세요.
              </p>
            </div>

            <Image
              src={'/assets/images/feature3.png'}
              width={550}
              height={450}
              alt='Link Share Feature example'
            />
          </div>

          <div className={styles.featureCard}>
            <Image
              src={'/assets/images/feature4.png'}
              width={550}
              height={450}
              alt='Link Search Feature example'
            />
            <div className={styles.featureDescription}>
              <h3 className={styles.featureDescriptionHeading}>
                저장한 링크를
                <em className={styles.gradient5}>검색</em>해 보세요
              </h3>
              <p>중요한 정보들을 검색으로 쉽게 찾아보세요.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
