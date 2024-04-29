import styles from './FolderToolBar.module.css';

interface FolderToolBarButtonProps {
  id: number;
  children: React.ReactNode;
  onClick: (id: number) => void;
  isFocused: boolean;
}

export default function FolderToolBarButton({
  id,
  children,
  onClick,
  isFocused,
}: FolderToolBarButtonProps) {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <button
      onClick={handleClick}
      className={`${styles.folderNameButton} ${
        isFocused && styles.focusedButton
      }`}
    >
      {children}
    </button>
  );
}
