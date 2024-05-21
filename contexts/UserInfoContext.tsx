'use client';

import React, { createContext, useState, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

const UserInfoContext = createContext<any>(undefined);

export const UserInfoProvider = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export const useUserInfo = () => useContext(UserInfoContext);
