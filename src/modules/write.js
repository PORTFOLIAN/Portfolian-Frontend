import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import projectService from '../service/project_service';

const WRITE_POST_ACTION = createAction('write/writePost');
const MODIFY_POST_ACTION = createAction('write/modifyPost');

const writePost = createAsyncThunk(
  WRITE_POST_ACTION,
  async ({ article, ownerStack }, thunkAPI) => {
    //유저가 저장누르면 서버로 내용 보내는거를 project-service에 구현하고 그거 호출하는 api 작성해주기!
    const response = await projectService.post({
      article,
      ownerStack,
    });

    return response;
  },
);

const modifyPost = createAsyncThunk(
  MODIFY_POST_ACTION,
  async ({ projectId, article, ownerStack }, thunkAPI) => {
    const response = await projectService.modify({
      projectId,
      article,
      ownerStack,
    });
    return response.data;
  },
);

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
};

const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    changeContents: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),

    changeStacks: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),

    clearContents: (state) => initialState,

    setContents: (state, { payload: project }) => ({
      ...state,
      title: project.title,
      stackList: project.stackList,
      subjectDescription: project.contents.subjectDescription,
      projectTime: project.contents.projectTime,
      condition: project.contents.recruitmentCondition,
      progress: project.contents.progress,
      description: project.contents.description,
      capacity: project.capacity,
      ownerStack: project.leader.stack,
      projectId: project.projectId,
    }),
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
    [modifyPost.fulfilled]: (state, { payload }) => {},
  },
});

export const { changeContents, changeStacks, clearContents, setContents } =
  writeSlice.actions;
export { writePost, modifyPost };
export default writeSlice.reducer;
