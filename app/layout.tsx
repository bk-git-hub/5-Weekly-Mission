import { UserInfoProvider } from '@/contexts/UserInfoContext';
import '@/styles/reset.css';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <head>
        <title>Linkbrary</title>
      </head>
      <body>
        <UserInfoProvider>{children}</UserInfoProvider>
      </body>
    </html>
  );
}
