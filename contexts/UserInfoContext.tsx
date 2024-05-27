'use client';

import React, { createContext, useState, useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { SignInFormFields } from '@/app/lib/definitions';
import { axiosInstance } from '@/utils/axiosInstance';
import { useRouter } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  const router = useRouter();

  const submitSignIn: SubmitHandler<SignInFormFields> = async (data) => {
    try {
      const response = await axiosInstance.post('/sign-in', data);
      if (response.status >= 200 && response.status < 300) {
        const accessToken = response.data.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        router.push('/folder');
      }
    } catch (error) {
      throw new Error('로그인 실패');
    }
  };

  const signOut = () => {
    localStorage.removeItem('accessToken');
    router.push('/signin');
  };

  return (
    <AuthContext.Provider
      value={{ userInfo, setUserInfo, submitSignIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
