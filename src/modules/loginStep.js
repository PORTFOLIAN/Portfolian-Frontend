import { createSlice } from '@reduxjs/toolkit';

/* 

loginStep
signin, signup 관리 리덕스 

*/

const initialState = {
  currentStep: 1,
  nickName: undefined,
  profile: undefined,
  userId: undefined,
};

const loginstepSlice = createSlice({
  name: 'loginStep',
  initialState,
  reducers: {
    nextStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep + 1,
    }),
    previousStep: (state, action) => ({
      ...state,
      currentStep: state.currentStep - 1,
    }),
    clearStep: () => initialState,
    setSignUpUser: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
});

export const { nextStep, previousStep, clearStep, setSignUpUser } =
  loginstepSlice.actions;

export default loginstepSlice.reducer;
