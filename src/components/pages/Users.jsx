import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/userState';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `パンチ-${val}`,
    image: 'https://source.unsplash.com/photos/eoqnr8ikwFE',
    email: '123456@test.com',
    phone: '000-111-222',
    company: {
      name: '株式会社テスト'
    },
    website: 'https://google.com'
  };
});

export const Users = () => {
  // contextによる状態管理
  // const { userInfo, setUserInfo } = useContext(UserContext);

  // recoilによる状態管理
  const [userInfo, setUserInfo] = useRecoilState(userState);

  // ----------
  //ユーザー切り替えボタン押下時の処理
  // ----------
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザーの一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>
        ユーザー切り替え
      </SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
