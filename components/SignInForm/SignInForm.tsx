import { useState } from 'react';
import AuthInput from '../AuthInput/AuthInput';
import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';

export default function SignInForm() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <form className={styles.authForm}>
      <AuthInput
        type='email'
        labelText='이메일'
        id='user-email'
        enableVisibilityToggle={false}
      />

      <AuthInput
        type='password'
        labelText='비밀번호'
        id='password'
        enableVisibilityToggle={true}
      />
      <Button className={styles.signUpButton}>로그인</Button>
    </form>
  );
}
