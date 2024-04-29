import styles from './FolderToolBar.module.css';

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
      <img src={imgSrc} alt={alt} />
      {children}
    </button>
  );
}
