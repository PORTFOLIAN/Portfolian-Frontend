import httpClient from './http_client';

// TODO: 채팅 관련 http 통신 구현하기
// note: 채팅 방 만들기 (상대방id, 프로젝트id, 내 accessToken 보내기 | contents type: form-data)
// note: 채팅 방 목록 가져오기
// note: 메시지 목록 가져오기
// note ??: 응답 온거 가지고 소켓 통신하는 코드도 여기에 작성해야할까? -> 일단 NO
// note ??: 서비스 모듈 말고 리덕스로 관리해야 하는 데이터는 없을까? -> 나중에 채팅 팝업 떠있는 여부 데이터 리덕스로 만들 때 고려해보기
/*
thinking about ..:
1. navbar에서 채팅방 켰을 때
  1-1 채팅방 목록 가져오기 (GET)
  1-2 채팅방 클릭했을 때
    1-2-1 채팅 방 만들기 (POST)
    1-2-2 메시지 목록 가져오기 (GET)
    1-2-3 room:enter 이벤트 emit하기

2. 프로젝트 페이지에서 채팅방 켰을 때
  2-1 채팅 방 만들기 (POST)
  2-2 메시지 목록 가져오기 (GET)
  2-3 room:enter 이벤트 emit하기

3. 채팅방 닫을 때
  3-1 room:leave 이벤트

4. 채팅방 나갈 때
  4-1 채팅 방 나가기 (PUT)
*/

class Chatting {
  constructor(httpClient) {
    this.chatting = httpClient;
  }
  /* 채팅하기 or 채팅목록에서 채팅방 클릭했을 때 호출되는 메서드 */
  creatChat = async (leaderId, projectId) => {
    try {
      const roomId = await this.chatting.post('chats', {
        userId: leaderId,
        projectId: projectId,
      });
      return roomId;
    } catch (error) {
      console.error(error);
    }
  };

  /* 채팅방 목록 가져올 때 호출되는 메서드 */
  getChatList = async () => {
    try {
      const chatList = await this.chatting.get('chats');
      return chatList;
    } catch (error) {
      console.error(error);
    }
  };

  /* 메시지 내역 가져오는 메서드 */
  getMessageList = async (roomId) => {
    try {
      const messageList = await this.chatting.get(`chats/${roomId}`);
      return messageList;
    } catch (error) {
      console.error(error);
    }
  };

  /* 채팅방 나가기 메서드 */
  DeleteChat = async (roomId) => {
    try {
      const response = await this.chatting.put(`chats/${roomId}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

const chattingService = new Chatting(httpClient);
export default chattingService;
