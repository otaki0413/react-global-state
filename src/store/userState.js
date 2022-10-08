import { atom } from 'recoil';

// recoil上で状態を管理している
export const userState = atom({
  key: 'userState',
  default: { isAdmin: false }
});
