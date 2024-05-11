import { useState } from 'react';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { validateEmail } from '@/utils/validateEmail';
import { setegid } from 'process';

export default function SignInForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleEmailFocusOut = () => {
    const isValidEmail = validateEmail(emailValue);
    if (!isValidEmail) {
      setEmailError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit}>
      <AuthInput
        type='email'
        labelText='이메일'
        id='user-email'
        enableVisibilityToggle={false}
        value={emailValue}
        onChange={handleEmailChange}
        onBlur={handleEmailFocusOut}
        error='올바른 이메일 주소가 아닙니다'
        hasError={emailError}
      />

      <AuthInput
        type='password'
        labelText='비밀번호'
        id='password'
        enableVisibilityToggle={true}
        value={passwordValue}
        onChange={handlePasswordChange}
        hasError={false}
      />
      <Button className={styles.signUpButton} type='submit'>
        로그인
      </Button>
    </form>
  );
}
