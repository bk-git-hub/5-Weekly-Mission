import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import ShowTextToggle from '../ShowTextToggle/ShowTextToggle';

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({ message: '올바른 이메일 형식이 아닙니다' }),

    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요' })
      .min(8, {
        message: '비밀번호는 최소 8자 이상 영문, 숫자 조합이어야 합니다.',
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, {
        message: '비밀번호는 영문과 조합이어야 합니다',
      }),

    confirmPassword: z.string().min(1, { message: '비밀번호를 입력해주세요' }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type SignUpFormFields = z.infer<typeof schema>;

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCPW, setShowCPW] = useState<boolean>(false);

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };

  const handlePWToggleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleCPWToggleClick = () => {
    setShowCPW(!showCPW);
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

          <ShowTextToggle
            showText={showPassword}
            onClick={handlePWToggleClick}
          />
        </div>
        {errors.password && (
          <div className={styles.errorMessage}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.inputBox}>
        <label htmlFor='confirmPassword'>비밀번호 확인</label>
        <div
          className={`${styles.inputWrapper} ${
            errors.confirmPassword && styles.errorInput
          }`}
        >
          <input
            {...register('confirmPassword')}
            type={showCPW ? 'text' : 'password'}
            placeholder='Confirm Password'
            className={styles.authInput}
            onBlur={() => trigger('confirmPassword')}
          />
          <ShowTextToggle showText={showCPW} onClick={handleCPWToggleClick} />
        </div>
        {errors.confirmPassword && (
          <div className={styles.errorMessage}>
            {errors.confirmPassword.message}
          </div>
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
