import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import projectService from "../service/project_service";

// 유저가 클릭한 모집공고의 상세페이지 상태를 담고있는 리덕스입니다.
// 모집공고 클릭시 상태 담고 나가면 초기화
const READ_PROJECT = createAction("projectRead/readProject");

const readProject = createAsyncThunk(
  READ_PROJECT, 
  async (projectId, thunkAPI) => {
    const response = await projectService.getDetail(projectId);

    return response.data;
  });

const initialState = {
  code: 0,
  projectId: undefined,
  title: "",
  stackList: [],
  contents: {
    subjectDescription: "",
    projectTime: "",
    recruitmentCondition: "",
    progress: "",
    description: "",
  },
  capacity: 0,
  view: 0,
  bookMark: false,
  status: 0,
  leader: {
    userId: "",
    nickName: "",
    description: "",
    stack: "",
    photo: "../../public/img/banner/03.png",
  },
}

const projectReadSlice = createSlice({
  name: "projectRead",
  initialState,
  reducers: {
    clearRead: (state)=>initialState,
  },
  extraReducers: {
    [readProject.fulfilled]: (state, {payload}) => ({
      ...state,
      code: payload.code,
      projectId: payload.projectId,
      title: payload.title,
      stackList: payload.stackList,
      contents: {
        subjectDescription: payload.contents.subjectDescription,
        projectTime: payload.contents.projectTime,
        recruitmentCondition: payload.contents.recruitmentCondition,
        progress: payload.contents.progress,
        description: payload.contents.description,
      },
      capacity: payload.capacity,
      view: payload.view,
      bookMark: payload.bookMark,
      status: payload.status,
      leader: {
        userId: payload.leader.userId,
        nickName: payload.leader.nickName,
        description: payload.leader.description,
        stack: payload.leader.stack,
        photo: payload.leader.photo,
      },
    }),
  }
})

export { readProject };
export const {clearRead} = projectReadSlice.actions;
export default projectReadSlice.reducer;
