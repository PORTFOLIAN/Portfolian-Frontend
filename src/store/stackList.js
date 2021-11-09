import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {name: 'Front-end', color: '#AACFF2'},
  {name: 'Back-end', color: '#FFE58A'},
  {name: 'Design', color: '#FBE1F8'},
  {name: 'Spring', color: '#B0FFB4'},
  {name: 'Django', color: '#93C59B'},
  {name: 'Flask', color: '#ACACB4'},
  {name: 'Node.js', color: '#D5F6C1'},
  {name: 'React', color: '#D0FDFD'},
  {name: 'Vue', color: '#B4E8D2'},
  {name: 'Android', color: '#AFF2AA'},
  {name: 'iOS', color: '#FFBBB7'},
  {name: 'Angular', color: '#ECA0A0'},
  {name: 'Kotlin', color: '#FBCDB9'},
  {name: 'Swift', color: '#FFDEB7'},
  {name: 'Python', color: '#C0CCF8'},
  {name: 'Java', color: '#F4D8D8'},
  {name: 'Javascript', color: '#FAFC9F'},
  {name: 'Typescript', color: '#C9E3FB'},
  {name: 'HTML/CSS', color: '#EDE4FF'},
  {name: 'Go', color: '#C1EDF6'},
  {name: 'C/C++', color: '#DEE7FE'},
  {name: 'C#', color: '#CAB7FF'},
  {name: 'Firebase', color: '#FFEDAE'},
  {name: 'AWS', color: '#F8C488'},
  {name: 'GCP', color: '#F9E686'},
  {name: 'Git', color: '#C1D2ED'},
  {name: 'Figma', color: '#C1B7FF'},
  {name: 'Sketch', color: '#FFF9C3'},
  {name: 'AdobeXD', color: '#FFB7F8'},
  {name: 'Photoshop', color: '#C9E3FB'},
  {name: 'Illustrator', color: '#CFC3AC'},
  {name: 'ect', color: '#5C5C5C'},
];

const stackListSlice = createSlice({
  name: "stackList",
  initialState,
  reducers: {
    addStack: (state, action) => {
      state.push(action.payload);
    },
    initStack: () => initialState,
  }
});

export const { addStack, initStack} = stackListSlice.actions;
export default stackListSlice.reducer;