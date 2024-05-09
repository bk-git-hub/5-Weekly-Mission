import styles from '@/styles/AuthPage.module.css';
import AuthHeader from '@/components/AuthHeader/AuthHeader';
import SignInForm from '@/components/SignInForm/SignInForm';
import SocialAuth from '@/components/SocialAuth/SocialAuth';

export default function SignUp() {
  return (
    <>
      <main className={styles.authPage}>
        <div className={styles.authPageContainer}>
          <AuthHeader
            text='회원이 아니신가요?'
            linkText='회원 가입하기'
            link='/signup'
          />
          <SignInForm />
          <SocialAuth text='소셜 로그인' />
        </div>
      </main>
    </>
  );
}
