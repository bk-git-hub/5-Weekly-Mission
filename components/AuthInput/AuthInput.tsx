import { useState } from 'react';
import styles from './AuthInput.module.scss';
import Image from 'next/image';
import { text } from 'stream/consumers';

interface AuthInputProps {
  type: string;
  labelText: string;
  id: string;
  enableVisibilityToggle: boolean;
}

export default function AuthInput({
  type,
  labelText,
  id,
  enableVisibilityToggle,
}: AuthInputProps) {
  const [showText, setShowText] = useState(false);

  const handleToggleClick = () => {
    setShowText(!showText);
  };

  const inputType = showText ? 'text' : type;
  return (
    <div className={styles.inputBox}>
      <label htmlFor={id}>{labelText}</label>
      <div className={styles.inputWrapper}>
        <input type={inputType} id={id} className={styles.authInput} />
        {enableVisibilityToggle && (
          <button
            onClick={handleToggleClick}
            className={styles.toggleButton}
            type='button'
          >
            {showText ? (
              <Image
                src={'/assets/images/eye-on.svg'}
                alt='Hide password'
                fill
              />
            ) : (
              <Image
                src={'/assets/images/eye-off.svg'}
                alt='Show password'
                fill
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
