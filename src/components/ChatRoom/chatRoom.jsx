import React, { useEffect } from 'react';
import chattingService from '../../service/chatting';

function ChatRoom({ leaderId, projectId }) {
  useEffect(() => {
    // 채팅방 생성 http 통신 모듈 호출하기
    chattingService.createChat(leaderId, projectId).then((response) => {
      const roomId = response.chatRoomId;
      console.log(roomId);
    });
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default ChatRoom;
