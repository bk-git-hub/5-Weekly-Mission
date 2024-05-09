import styles from './SocialAuth.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface SocialAuthProps {
  text: string;
}

export default function SocialAuth({ text }: SocialAuthProps) {
  return (
    <div className={styles.socialAuthWrapper}>
      <span>{text}</span>
      <div className={styles.socialButtonBar}>
        <Link
          href={'https://www.google.com/'}
          target='_blank'
          rel='noreferrer noopener'
        >
          <Image
            src={'assets/images/google.svg'}
            alt='google'
            width={42}
            height={42}
          />
        </Link>
        <Link
          href={'https://www.kakaocorp.com/page/service/service/KakaoTalk'}
          target='_blank'
          rel='noreferrer noopener'
        >
          <Image
            src={'assets/images/kakao.svg'}
            alt='kakao'
            width={42}
            height={42}
          />
        </Link>
      </div>
    </div>
  );
}
