import styles from './Account.module.css';
import PropTypes from 'prop-types';

const Account = ({ profileImgSource, userEmail }) => {
  return (
    <div className={styles.account}>
      <img
        src={profileImgSource}
        alt="User Profile"
        className={styles.userProfileImg}
      />
      <span className={styles.userEmail}>{userEmail}</span>
    </div>
  );
};

Account.propTypes = {
  profileImgSource: PropTypes.string,
  userEmail: PropTypes.string,
};

export default Account;
