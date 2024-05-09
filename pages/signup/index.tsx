import styles from '@/styles/AuthPage.module.css';
import AuthHeader from '@/components/AuthHeader/AuthHeader';
import SignUpForm from '@/components/SignUpForm/SignUpForm';
import SocialAuth from '@/components/SocialAuth/SocialAuth';

export default function SignUp() {
  return (
    <>
      <main className={styles.authPage}>
        <div className={styles.authPageContainer}>
          <AuthHeader
            text='이미 회원이신가요?'
            linkText='로그인하기'
            link='/signin'
          />
          <SignUpForm />
          <SocialAuth text='다른 방식으로 가입하기' />
        </div>
      </main>
    </>
  );
}
