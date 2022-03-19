import React, { useEffect, useState } from 'react';
import { ReactComponent as Close } from '../asset/close.svg';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient.connect('http://api.portfolian.site:3001');

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
