import httpClient from './http_client';

class Auth {
  constructor(httpClient) {
    this.auth = httpClient;
  }

  //아마 완성
  login = async (method, code) => {
    try {
      const user = await this.auth.post(`oauth/${method}/access`, {
        token: code,
      });
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  //아마 완성(?)
  logout = async () => {
    try {
      const res = await this.auth.patch('oauth/logout');
      console.log('logout');
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  /* page refresh시 cookie에 남아있는 http-only refresh token을 이용해
   유저 정보를 얻어 옵니다. */
  getUserInfo = async (userData, refreshToken) => {
    //refreshToken 쿠키로 아직 안바꿔줌
    try {
      const userInfo = await this.auth.post(
        '/oauth/refresh',
        {
          userId: userData,
        },
        { withCredentials: true },
      );
      // console.log("auth service getUserInfo userInfo: ", userInfo);
      return userInfo;
    } catch (error) {
      console.error(error);
    }
  };

  setNickName = async (userInfo) => {
    try {
      return await this.auth.patch(`users/${userInfo.userId}/nickName`, {
        nickName: userInfo.nickName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  resetToken = () => {
    this.auth.defaults.headers.common['Authorization'] = '';
  };
}

const authService = new Auth(httpClient);
export default authService;
