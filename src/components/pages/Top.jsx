import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useHistory } from 'react-router-dom';

export const Top = () => {
  const history = useHistory();

  // ボタン押下時に画面遷移する処理(useHistoryを使って、stateを渡す)
  // ----------
  // 管理者ボタン押下時の処理
  // ----------
  const onClickAdmin = () =>
    history.push({ pathname: '/users', state: { isAdmin: true } });
  // ----------
  // 一般ボタン押下時の処理
  // ----------
  const onClickGeneral = () =>
    history.push({ pathname: '/users', state: { isAdmin: false } });

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
