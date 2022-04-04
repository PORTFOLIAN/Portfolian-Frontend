import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../asset/close.svg';

function ChatContainer({ onClickChat, children }) {
  //note: handleChat은 navbar에서 상속받고있음
  return (
    <>
      <Container>
        <div>
          <Close onClick={onClickChat}></Close>
        </div>
        {children}
      </Container>
    </>
  );
}

export default ChatContainer;

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  box-shadow: 0px 2px 9px 5px rgb(153 153 153 / 50%);
  background-color: #fff;
  bottom: 0;
  right: 4rem;
  /* transform: translateY(-50%); */
  margin: 0 auto;
  width: 414px;
  height: 600px;
  border-radius: 10px 10px 0 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    right: 0;
  }

  @media screen and (max-width: 414px) {
    width: 100%;
    height: 90%;
  }
`;
