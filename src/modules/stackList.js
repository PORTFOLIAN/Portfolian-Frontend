import { createSlice } from '@reduxjs/toolkit';
import { wholeStack } from './wholeStack';
// 메인페이지에서 유저가 선택한 스택을 관리하는 리덕스 모듈입니다.

const initialState = wholeStack;

const stackListSlice = createSlice({
  name: 'stackList',
  initialState,
  reducers: {
    addStack: (state, action) => {
      // 선택 스택 추가 (오브젝트형식)
      state.push(action.payload);
    },
    removeStack: (state, action) => {
      //선택 취소
      state.splice(
        state.findIndex((item) => item.name === action.payload.name),
        1,
      );
    },
    clearStack: () => [], //전체취소
    initStack: () => initialState, //전체선택
  },
});

export const { addStack, removeStack, clearStack, initStack } =
  stackListSlice.actions;

export default stackListSlice.reducer;
