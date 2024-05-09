import AuthInput from '../AuthInput/AuthInput';
import Button from '../Button/Button';
import styles from './SignUpForm.module.scss';

export default function SignUpForm() {
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

      <AuthInput
        type='password'
        labelText='비밀번호 확인'
        id='password=check'
        enableVisibilityToggle={true}
      />

      <Button className={styles.signUpButton}>회원가입</Button>
    </form>
  );
}
