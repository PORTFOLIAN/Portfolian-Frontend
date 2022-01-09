import { createSlice } from "@reduxjs/toolkit";
import { stackNames } from "./wholeStack";

const initialState = {
  stack: stackNames,
  keyword: "default",
  sort: "default",
  recruit: [],
};

const recruitListSlice = createSlice({
  name: "recruitList",
  initialState,
  reducers: {
    update: (state, {payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    clear: () => ({}),
  },
});

export const {update, clear} = recruitListSlice.actions;
export default recruitListSlice.reducer;