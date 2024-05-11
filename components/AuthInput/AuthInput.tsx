import { useState } from 'react';
import styles from './AuthInput.module.scss';
import Image from 'next/image';

interface AuthInputProps {
  type: string;
  labelText: string;
  id: string;
  enableVisibilityToggle: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void; // Add onBlur event handler
  error?: string;
  hasError:boolean;
}

export default function AuthInput({
  type,
  labelText,
  id,
  enableVisibilityToggle,
  value,
  onChange,
  onBlur,
  error, // Add error prop
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
        <input
          type={inputType}
          id={id}
          className={styles.authInput}
          value={value}
          onChange={onChange}
          onBlur={onBlur} // Add onBlur event handler
        />
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
      {error && <p className={styles.error}>{error}</p>}{' '}
      {/* Display error message if error exists */}
    </div>
  );
}
