import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useCallback, useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/api';
import Account from '../Account/Account';
import Button from '../Button/Button';
import { convertObjectKeysToCamelCase } from '../../utils/convertObjectKeysToCamelCase';

const styleMainHeaderClassName = 'main-header';
const styleLogoImgClassName = 'logo-img';
const styleBlindClassName = 'blind';
const logoAltMessage = 'Linkbrary';

interface UserInfo {
  [key: string]: any;
}

export default function Header() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleLoadHeader = useCallback(async () => {
    let result;
    try {
      result = await getUserInfo();
      const convertedResult = convertObjectKeysToCamelCase(result);
      setUserInfo(convertedResult);
    } catch (error) {}
  }, []);

  useEffect(() => {
    handleLoadHeader();
  }, [handleLoadHeader]);

  return (
    <header className={styleMainHeaderClassName}>
      <h1>
        <a href='/'>
          <img
            src={logo}
            alt={logoAltMessage}
            className={styleLogoImgClassName}
          />
        </a>
        <span className={styleBlindClassName}>Linkbrary</span>
      </h1>
      {userInfo !== null ? (
        <Account
          profileImgSource={userInfo.imageSource}
          userEmail={userInfo.email}
        />
      ) : (
        <Button>로그인</Button>
      )}
    </header>
  );
}
