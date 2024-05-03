import React, { forwardRef } from 'react';
import Button from '@components/Button/Button';
import linkIcon from '@assets/images/link.svg';
import styles from './AddLinkBar.module.css';

interface AddLinkBarProps {
  isFixed: boolean;
}

const AddLinkBar = forwardRef<HTMLDivElement, AddLinkBarProps>((props, ref) => {
  // Conditionally apply the styles based on the value of isFixed prop
  const containerClassName = props.isFixed
    ? `${styles.addLinkBarContainer} ${styles.fixed}`
    : styles.addLinkBarContainer;

  return (
    <div className={containerClassName}>
      <div className={styles.addLinkBar} ref={ref}>
        <div className={styles.inputBox}>
          <img className={styles.linkIcon} src={linkIcon} alt='링크 추가하기' />
          <input
            className={styles.linkInput}
            placeholder='링크를 추가해 보세요'
          />
        </div>
        <Button>추가하기</Button>
      </div>
    </div>
  );
});

export default AddLinkBar;
