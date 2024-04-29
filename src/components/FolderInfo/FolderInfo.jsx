import PropTypes from 'prop-types';
import styles from './FolderInfo.module.css';

const FolderInfo = ({ ownerName, folderName, profileImgSource }) => {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.ownerProfile}>
        <img
          src={profileImgSource}
          alt="Folder Owner Profile"
          className={styles.ownerProfileImage}
        />
        <span>@{ownerName}</span>
      </div>
      <span className={styles.folderName}>{folderName}</span>
    </div>
  );
};

FolderInfo.propTypes = {
  ownerName: PropTypes.string,
  folderName: PropTypes.string,
  profileImgSource: PropTypes.string,
};

export default FolderInfo;
