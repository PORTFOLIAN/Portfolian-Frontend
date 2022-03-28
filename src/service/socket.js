import socketIOClient from 'socket.io-client';

const socket = socketIOClient('https://api.portfolian.site:443', {
  transports: ['websocket'],
});

const socket_auth = (userId) => {
  socket.emit('authorization', {
    userId: userId,
  });
};

const socket_send = (roomId, sender, message) => {
  socket.emit('chat:send', {
    roomId: roomId,
    sender: sender,
    message: message,
    date: Date.now(),
  });
  return '';
};

const socket_receive = (receive_message) => {
  socket.on('chat:receive', (message) => {
    console.log(message);
    receive_message = message;
  });
  return receive_message;
};

// 상대방과의 채팅방 켤 때
const socket_room_enter = (roomId) => {
  socket.emit('room:enter', () => {
    // 방에 들어갔을 때 이벤트
  });
};

// 상대방과의 채팅방 끌 때
const socket_room_leave = (roomId) => {
  socket.emit('room:leave', () => {
    // 채팅방 끌 때 이벤트
  });
};

// 새로 생성된 채팅방에 들어갈 때
const socket_notice_enter = () => {
  socket.on('notice:enter', () => {
    // 채팅방 새로 생성됐을 때 이벤트
  });
};

const socket_notice_leave = (roomId) => {
  // 채팅방 나갔습니다 보여주는거, on으로 할지 emit으로할지 생각해보기
};

const socket_off = (event) => {
  switch (event) {
    case 'send':
      socket.off('chat:send');
      break;
    case 'receive':
      socket.off('chat:receive');
      break;
    case 'enter':
      socket.off('notice:enter');
      break;
    case 'leave':
      socket.off('notice:leave');
      break;
    case 'newRoom':
      socket.off('room:enter');
      break;
    case 'offRoom':
      socket.off('room:leave');
      break;
    default:
      break;
  }
};

export default socket;
export {
  socket_auth,
  socket_send,
  socket_receive,
  socket_off,
  socket_room_enter,
  socket_room_leave,
  socket_notice_enter,
  socket_notice_leave,
};
