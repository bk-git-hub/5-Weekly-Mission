import styles from './ModalContents.module.scss';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { ModalContentProps } from '@/utils/interfaces';

export default function FolderInputModal({
  initialValue = '',
  headerText,
  buttonText,
}: ModalContentProps) {
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
