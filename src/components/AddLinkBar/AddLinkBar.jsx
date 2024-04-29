import Button from '../Button/Button';
import linkIcon from '../../assets/images/link.svg';
import styles from './AddLinkBar.module.css';

const AddLinkBar = () => {
  return (
    <div className={styles.addLinkBar}>
      <div className={styles.inputBox}>
        <img className={styles.linkIcon} src={linkIcon} alt="링크 추가하기" />
        <input
          className={styles.linkInput}
          placeholder="링크를 추가해 보세요"
        />
      </div>
      <Button>추가하기</Button>
    </div>
  );
};

export default AddLinkBar;
