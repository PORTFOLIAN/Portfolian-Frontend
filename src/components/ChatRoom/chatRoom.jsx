import React, { useEffect } from 'react';
import chattingService from '../../service/chatting_service';

function ChatRoom({ otherUser, projectId }) {
  useEffect(() => {
    // 채팅방 생성 http 통신 모듈 호출하기
    // chattingService.createChat(otherUser.userId, projectId).then((response) => {
    //   const roomId = response.chatRoomId;
    //   console.log(roomId);
    // });
    console.log('chatRoom', otherUser);
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}

export default ChatRoom;
