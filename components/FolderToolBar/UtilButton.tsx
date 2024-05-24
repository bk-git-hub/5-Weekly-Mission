import styles from './FolderToolBar.module.scss';
import Image from 'next/image';

interface UtilButtonProps {
  imgSrc: string;
  children: React.ReactNode;
  onClick: () => void;
  alt: string;
}

export default function UtilButton({
  imgSrc,
  children,
  onClick,
  alt,
}: UtilButtonProps) {
  return (
    <button className={styles.utilButton} onClick={onClick}>
      <div className={styles.utilButtonIcon}>
        <Image src={imgSrc} alt={alt} fill />
      </div>
      {children}
    </button>
  );
}
