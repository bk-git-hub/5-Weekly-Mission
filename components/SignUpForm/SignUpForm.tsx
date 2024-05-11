import { useState } from 'react';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';

export default function SignUpForm() {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [passwordCheckValue, setPasswordCheckValue] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheckValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate form fields and perform signup logic here
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
        hasError={false}
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

      <AuthInput
        type='password'
        labelText='비밀번호 확인'
        id='password-check'
        enableVisibilityToggle={true}
        value={passwordCheckValue}
        onChange={handlePasswordCheckChange}
        hasError={false}
      />

      <Button className={styles.signUpButton} type='submit'>
        회원가입
      </Button>
    </form>
  );
}
