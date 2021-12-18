import httpClient from "./http_client";

class Auth {
  constructor(httpClient) {
    this.auth = httpClient;
  }

  login = async (method, code) => {
    try {
      const user = await this.auth.post(`login`, {
        loginType: method,
        code,
      });
      return user;
    } catch(error) {
      console.error(error);
    }
  };

  logout = async () => {
    try {
      const res = await this.auth.post("logout");
      return res;
    }catch (error) {
      console.error(error);
    }
  };

  getUserInfo = async () => {
    try {
      const userInfo = await this.auth.get("auth");
      return userInfo;
    } catch(error) {
      console.error(error);
    }
  };

  signUp = async (userInfo) => {
    return await this.auth.post("login/signup", userInfo);
  };

  resetToken = () => {
    this.auth.defaults.headers.common["Authorization"] = "";
  };
}

const authService = new Auth(httpClient);
export default authService;