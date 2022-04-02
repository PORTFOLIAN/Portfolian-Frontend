import React, { useEffect, useState } from 'react';
import chattingService from '../../service/chatting';

function ChatTest({ leaderId, projectId }) {
  // note: navbar -> chatContainer -> chatTest | project -> chatContainer -> chatTest

  useEffect(() => {
    // 채팅방 생성 http 통신 모듈 호출하기
    chattingService.createChat(leaderId, projectId).then((response) => {
      const roomId = response.chatRoomId;
      console.log(roomId);
    });
  }, []);
  return (
    <>
      <button onClick={(e) => {}}>채팅방 입장하기</button>
      <div></div>
    </>
  );
}

export default ChatTest;
