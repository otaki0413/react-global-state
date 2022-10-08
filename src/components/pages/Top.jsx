import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  // ----------
  // 管理者ボタン押下時の処理
  // ----------
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: '/users' });
  };
  // ----------
  // 一般ボタン押下時の処理
  // ----------
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: '/users' });
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
