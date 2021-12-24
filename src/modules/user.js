import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth_service";
import userService from "../service/user_service";
import httpClient from "../service/http_client";
import axios from "axios";

//action 정의
const FETCH_USESR_BY_ID = createAction("user/FETCH_USESR_BY_ID");
const FETCH_USER_BY_REFRESHTOKEN = createAction("user/FETCH_USER_BY_REFRESHTOKEN");
const ADD_USER_NICKNAME = createAction("user/ADD_USER_NICKNAME");
const MODIFY_USER_INFO = createAction("user/MODIFY_USER_INFO");

/*
createAsyncThunk (액션타입문자열, 프로미스를 반환하는 비동기함수, 추가옵션)
{ return thunk anction creator } 

//thunk action creator: 프로미스 콜백을 실행하고 프로미스를 기반으로 라이프사이클 액션을 디스패치한다. 
//리듀서로 액션 처리하는 로직은 직접 작성해줘야함
*/

// UserId로 소셜로그인 후 access token설정하기
const fetchUserById = createAsyncThunk(
  FETCH_USESR_BY_ID,
  async (userData, thunkAPI) => {
    const response = await authService.login(userData.social, userData.code); 
    // const response = await httpClient.get("projects?keyword=default&stack=default&sort=default"); 
    // 3.36.84.11:3000/projects?keyword=default&stack=default&sort=default
    //카카오로그인이면 social: kakao, code: tokenId
    console.log(await httpClient.get(`users/${response.data.userId}/info`));
    // console.log("response: ", response);
    const accessToken = response.data.accessToken;

    //이게뭘까(?)
    httpClient.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return response.data;
  }
)

//유저 최초 로그인시(회원가입시) 닉네임을 설정하고 엑세스토큰을 셋팅한다.
const addUserNickName = createAsyncThunk(
  ADD_USER_NICKNAME,
  async (userInfo, thunkAPI) => {
    const response = await authService.setNickName(userInfo); //"service/auth_service"
    
    // const accessToken = response.data.accessToken; //

    // httpClient.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${accessToken}`;

    return userInfo;
  }
);

const initialState = {
  nickName: undefined,
  id: undefined,
  // imageUrl: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    clearUser: (state) => initialState,
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, { payload }) => ({
      ...state,
      nickName: payload.nickName,
      id: payload._id,
    }),

    // [fetchUserByRefreshToken.fulfilled]: (state, { payload }) => ({
    //   ...state,
    //   nickName: payload.nickName,
    //   id: payload.id,
    //   imageUrl: defaultPath + payload.image,
    //   likeLanguages: payload.likeLanguages,
    // }),

    [addUserNickName.fulfilled]: (state, { payload }) => ({
      ...state,
      nickName: payload.nickName,
      userId: payload.userId,
      // imageUrl: defaultPath + payload.image,
      // likeLanguages: payload.likeLanguages,
    }),

    // [modifyUserInfo.fulfilled]: (state, { payload }) => ({
    //   ...state,
    //   nickName: payload.nickName,
    //   id: payload._id,
    //   imageUrl: defaultPath + payload.image,
    //   likeLanguages: payload.likeLanguages,
    // }),

    // [modifyUserInfo.rejected]: (state, { payload }) => {
    //   if (payload === 401) {
    //     state.postError = "failed"; // post 정보 담음
    //   }
    // },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export {
  fetchUserById,
  addUserNickName,
};
export default userSlice.reducer;