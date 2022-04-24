import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import chattingService from '../../service/chatting_service';
import ChatListItem from '../ChatListItem/chatListItem';

function ChatList({ handleChatRoomDetail }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    //채팅방 가져오는 통신
    chattingService.getChatList().then((response) => {
      setChatList(response.chatRoomList);
    });
  }, []);
  return (
    <>
      {chatList.length > 0
        ? chatList.map((elem) => {
            return (
              <ListItemContainer
                onClick={handleChatRoomDetail(elem.chatRoomId, elem.user)}
                key={elem.chatRoomId}>
                <ChatListItem key={elem.chatRoomId}></ChatListItem>
              </ListItemContainer>
            );
          })
        : null}
    </>
  );
}

export default ChatList;

const ListItemContainer = styled.div``;
