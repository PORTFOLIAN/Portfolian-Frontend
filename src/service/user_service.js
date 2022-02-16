import httpClient from "./http_client"

/*
user관련 API 정의
 */

class User {
  constructor(httpClient) {
    this.user = httpClient;
  }

  //id를 이용해서 사용자 정보를 조회한다.
  getUserInfo = async(userId) => {
    try {
      const response = await this.user.get(`users/${userId}/info`)
      return response;
    } catch(error) {
      // this.getUserInfo(userId);
      console.log(error.response);
    }
  };

  // //user nickname 중복검사 (포트폴리안은 중복 허용)
  // checkNickname = async(id, nickName) => {
  //   try {
  //     const response = await this.user.get(
  //       `users/$(id)/exists?nickName=${nickName}`
  //     );
  //     return response.datal
  //   } catch(error){
  //     console.log(error);
  //   }
  // };

  //닉네임을 이용해 사용자 정보를 조회한다.
  getUserInfoByNickName = async (nickName) => {
    try {
      const params = {
        nickName: nickName,
      };

      const user = await this.user.get(`users`, {
        params,
      });
      return user;
    } catch(error) {
      console.log(error);
    }
  };

  //사용자 정보 수정
  //닉네임이 변경되면 AccessToken을 다시 설정해야한다.
  modifyUserInfo = async (id, userData)=> {
    try {
      const user = await this.user.patch(`users/${id}`, userData);
      return {
        user,
        modifySuccess: true,
      };
    }catch (error) {
      return {
        user: null,
        modifySuccess: false,
      };
    }
  };

  //회원탈퇴
  deleteUser = async (id) => {
    try {
      await this.user.delete(`users/${id}`);
      return true;
    } catch (error) {
      console.error(error);
    }
  };

  getUserReadList = async (id) => {
    try {
      const response = await this.user.get(`users/read-list/${id}`);
      return response;
    } catch(error) {
      console.log(error);
    }
  };

  getUserLikeList = async (id) => {
    try {
      const response = await this.user.get(`users/likes/${id}`);
      return response;
    } catch (error){
      console.log(error);
    }
  };

  getUserPostList = async (id) => {
    try {
      const response = await this.user.get(`users/myStudies/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

const userService = new User(httpClient);
export default userService;