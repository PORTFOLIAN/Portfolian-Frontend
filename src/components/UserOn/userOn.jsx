import React from 'react';
import styled from 'styled-components';
import HeaderProfile from '../HeaderProfile/headerProfile';
import { ReactComponent as Alert } from '../asset/alert.svg';
import { ReactComponent as Chatting } from '../asset/chatting.svg';

function UserOn({ handleLogout, handleChat }) {
  return (
    <Container>
      <HeaderProfile handleLogout={handleLogout} />
      <Chatting
        style={{ marginRight: '16px', cursor: 'pointer' }}
        onClick={handleChat}
      />
      <Alert width='1.3rem' height='1.3rem' style={{ cursor: 'pointer' }} />
      {/* <button onClick={handleLogout} >로그아웃임시</button> */}
      {
        // profileDropDownSwitch && <DropDown/>
      }
    </Container>
  );
}

export default UserOn;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
