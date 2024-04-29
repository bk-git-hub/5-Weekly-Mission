import styles from './FolderInfo.module.css';

interface FolderInfoProps {
  ownerName: string;
  folderName: string;
  profileImgSource: string;
}

const FolderInfo = ({
  ownerName,
  folderName,
  profileImgSource,
}: FolderInfoProps) => {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.ownerProfile}>
        <img
          src={profileImgSource}
          alt='Folder Owner Profile'
          className={styles.ownerProfileImage}
        />
        <span>@{ownerName}</span>
      </div>
      <span className={styles.folderName}>{folderName}</span>
    </div>
  );
};

export default FolderInfo;
