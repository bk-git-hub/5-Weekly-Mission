import Link from 'next/link';
import Image from 'next/image';
import styles from './AuthHeader.module.css';

interface AuthHeaderProps {
  text: string;
  linkText: string;
  link: string;
}

export default function AuthHeader({ text, linkText, link }: AuthHeaderProps) {
  return (
    <div className={styles.authPageHeader}>
      <Link href={'/'} className={styles.logo}>
        <Image src={'/assets/images/logo.svg'} fill alt='Linkbrary' />
      </Link>

      <div className={styles.membershipPromptBar}>
        <span className={styles.membershipPromptText}>{text}</span>
        <Link href={link} className={styles.membershipPromptLink}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}
