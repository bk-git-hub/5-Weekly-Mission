import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import ShowTextToggle from '../ShowTextToggle/ShowTextToggle';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/router';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요' })
    .email({ message: '올바른 이메일 형식이 아닙니다' }),

  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요' })
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

type SignInFormFields = z.infer<typeof schema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    setError,
  } = useForm<SignInFormFields>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const response = await axiosInstance.post('/sign-in', data);
      if (response.status >= 200 && response.status < 300) {
        router.push('/folder');
      } else {
      }
    } catch (error) {
      setError('email', { message: '이메일을 확인해주세요' });
      setError('password', { message: '비밀번호를 확인해주세요' });
    }
  };

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputBox}>
        <label htmlFor='email'>이메일</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.email && styles.errorInput
          }`}
        >
          <input
            {...register('email')}
            type='text'
            placeholder='Email'
            className={styles.authInput}
            onBlur={() => trigger('email')}
          />
        </div>
        {errors.email && (
          <div className={styles.errorMessage}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='password'>비밀번호</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.password && styles.errorInput
          }`}
        >
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            className={styles.authInput}
            onBlur={() => trigger('password')}
          />
          <ShowTextToggle showText={showPassword} onClick={handleToggleClick} />
        </div>
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <Button
        className={styles.signUpButton}
        type='submit'
        disabled={isSubmitting}
      >
        로그인
      </Button>
    </form>
  );
}
