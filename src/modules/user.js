import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "service/auth_service";
import userService from "service/user_service";
import httpClient from "service/http_client";

//action 정의
const FETCH_USESR_BY_ID = createAction("user/FETCH_USESR_BY_ID");
const FETCH_USER_BY_REFRESHTOKEN = createAction("user/FETCH_USER_BY_REFRESHTOKEN");
const ADD_USER_NICKNAME = createAction("user/ADD_USER_NICKNAME");
const MODIFY_USER_INFO = createAction("user/MODIFY_USER_INFO");

//사용자 정보를 수정하고 access token 설정
const modifyUserInfo = createAsyncThunk(
  MODIFY_USER_INFO,
  async (userData, {rejectWithValue}) => {
    const response = await userService.modifyUserInfo(userData.id, userData);
    // 정보 수정 성공시에만 access token 설정
    if (response.modifySuccess) {
      const accessToken = response.user.data.accessToken;
      // header에 access token 설정
      httpClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    } else {
      return rejectWithValue(response.modifySuccess);
    }

    return response.user.data;
  }
)