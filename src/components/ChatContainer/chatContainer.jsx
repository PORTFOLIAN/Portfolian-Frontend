import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Close } from '../asset/close.svg';
import { ReactComponent as Prev } from '../asset/prev.svg';

function ChatContainer({ onClickChat, children, roomMode = false }) {
  //note: handleChat은 navbar에서 상속받고있음
  return (
    <>
      <Container>
        <CloseContainer>
          <Close onClick={onClickChat}></Close>
          {roomMode && (
            <Prev
              style={{ width: '14px', height: '19px' }}
              onClick={onClickChat}></Prev>
          )}
        </CloseContainer>
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

const CloseContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;
