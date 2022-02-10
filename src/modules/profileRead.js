import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import userService from "../service/user_service";

const READ_PROFILE = createAction("profileRead/readProfile");

const readProfile = createAsyncThunk(
  READ_PROFILE,
  async (profileUserId, thunkAPI) => {
    const response = await userService.getUserInfo(profileUserId);
    return response.data;
  }
)

const initialState = {
  userId: '',
  nickName: '',
  description: '',
  stackList: '',
  photo: '',
  github: '',
  mail: '',
}


const profileReadSlice = createSlice({
  name: "profileRead",
  initialState,
  reducers: {
    clearProfile: (state) => initialState,
  },
  extraReducers: {
    [readProfile.fulfilled]: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
      description: payload.description,
      stackList: payload.stackList,
      photo: payload.photo,
      github: payload.github,
      mail: payload.mail,
    }),
    [readProfile.rejected]: (state, {payload}) => ({
      ...state,
    })
  }
})

export { readProfile };
export const { clearProfile } = profileReadSlice.actions;
export default profileReadSlice.reducer;