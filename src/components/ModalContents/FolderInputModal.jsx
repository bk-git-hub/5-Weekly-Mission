import styles from './ModalContents.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

export default function FolderInputModal({
  initialValue = '',
  headerText,
  buttonText,
}) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.modalContentWrapper}>
      <span className={styles.modalHeader}>{headerText}</span>
      <form className={styles.modalForm}>
        <input
          placeholder='내용 입력'
          value={inputValue}
          className={styles.modalInput}
          onChange={handleInputChange}
          autoFocus={true}
        />
        <Button className={styles.modalButton}>{buttonText}</Button>
      </form>
    </div>
  );
}
