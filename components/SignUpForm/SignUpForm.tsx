import Button from '../Button/Button';
import styles from '@/styles/AuthForm.module.scss';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({ message: '올바른 이메일 형식이 아닙니다' }),

    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요' })
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),

    confirmPassword: z.string().min(1, { message: '비밀번호를 확인해주세요' }),
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
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
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
            type='password'
            placeholder='Password'
            className={styles.authInput}
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
            type='password'
            placeholder='Confirm Password'
            className={styles.authInput}
          />
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
