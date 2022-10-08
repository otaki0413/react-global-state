import { createContext, useState } from 'react';

// コンテキスト初期化時に、空のオブジェクトを渡す
export const UserContext = createContext({});

// グローバルなstateが使用できるテンプレを作成？？
export const UserProvider = (props) => {
  const { children } = props;

  // state宣言
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
