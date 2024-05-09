import styles from '@/styles/AuthPage.module.css';
import AuthHeader from '@/components/AuthHeader/AuthHeader';
import SignUpForm from '@/components/SignUpForm/SignUpForm';

export default function SignUp() {
  return (
    <>
      <main className={styles.authPage}>
        <div className={styles.authPageContainer}>
          <AuthHeader text='이미 회원이신가요?' linkText='로그인하기' />
          <SignUpForm />
        </div>
      </main>
    </>
  );
}
