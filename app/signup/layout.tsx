import { ReactNode } from 'react';
import { UserInfoProvider } from '@/contexts/UserInfoContext';
import '@/styles/reset.css';
import '@/styles/globals.css';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <title>회원가입</title>
      </head>
      <body>
        <UserInfoProvider>{children}</UserInfoProvider>
      </body>
    </html>
  );
}
