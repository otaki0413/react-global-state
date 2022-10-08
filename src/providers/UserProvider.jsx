import { createContext } from 'react';

// コンテキスト初期化時に、空のオブジェクトを渡す
export const UserContext = createContext({});

// グローバルなstateが使用できるテンプレを作成？？
export const UserProvider = (props) => {
  const { children } = props;
  const contextName = 'ぱんち';
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
