import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectService from "../service/project_service";

const WRITE_POST_ACTION = createAction("write/writePost");
const MODIFY_POST_ACTION = createAction("write/modifyPost");

const writePost = createAsyncThunk(
  WRITE_POST_ACTION,
  async({article, ownerStack}, thunkAPI)=> {
    //유저가 저장누르면 서버로 내용 보내는거를 project-service에 구현하고 그거 호출하는 api 작성해주기!
    // console.log("article, ownerstack", article, ownerStack);
    const response = await projectService.post({
      article, ownerStack,
    });

    return response;
  }
)

// 나중에 지우라이~~
// const writePost = createAsyncThunk(
//   writePostAction,
//   async ({ title, content, language }, thunkAPI) => {
//     const newLanguages = language.map((item) => item.value);
//     const response = await studyService.register({
//       title,
//       content,
//       language: newLanguages,
//     });

//     return response.status;
//   }
// );


const initialState = {
  title: '',
  stackList: [],
  subjectDescription: '',
  projectTime: '',
  condition: '',
  progress: '',
  description: '',
  capacity: undefined,
  ownerStack: '',
  projectId: undefined,
  postCode: undefined,
  postError: undefined
}

const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    changeContents: (state, {payload: {key, value} }) => ({
      ...state,
      [key]: value,
    }),

    changeStacks: (state, {payload: {key, value}}) => ({
      ...state,
      [key]: value,
    }),

    clearContents: (state)=> initialState,
  },
  extraReducers: {
    [writePost.fulfilled]: (state, { payload }) => {
      // console.log("payload", payloa''d);
      // if (payload === 201) {
      //   state.post = "success";
      // }
      // state.post = payload; // post 정보 담음
    },
    // [writePost.rejected]: (state, { payload }) => {
    //   if (payload === 401) {
    //     state.postError = "failed"; // post 정보 담음
    //   }
    // },
  }
})

export const {changeContents, changeStacks, clearContents} = writeSlice.actions;
export {writePost};
export default writeSlice.reducer;