import styles from './ModalContents.module.css';
import Button from '../Button/Button';
import { useState } from 'react';

interface FolderInputModalProps {
  initialValue: string;
  headerText: string;
  buttonText: string;
}

export default function FolderInputModal({
  initialValue = '',
  headerText,
  buttonText,
}: FolderInputModalProps) {
  const [inputValue, setInputValue] = useState(initialValue);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
