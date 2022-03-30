import React, { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../asset/close.svg';
import socket from '../../service/socket';

function ChatTest({ handleChat }) {
  const [currSocket, setCurrSoket] = useState();
  useEffect(() => {}, []);

  return (
    <>
      <Close onClick={handleChat}></Close>
    </>
  );
}

export default ChatTest;
