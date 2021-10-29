import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';

let stackList = [
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
  {name: 'illustrator', color: '#CFC3AC'},
  {name: 'ect', color: '#5C5C5C'},
]


let recruitList = [
  {
    projectIdx: 0,
    title: 'React를 활용한 간단한 로그인 기능 구현하기',
    stackList: ['Front-end', 'Back-end', 'React'],
    description: '리액트를 이용한 카카오 로그인 구현요',
    capacity: 4,
    view: 123,
    bookMark: false,
    status: 0,
  },
  {
    projectIdx: 1,
    title: '리액트로 저쩌구 어떤걸 할지는 나중에 정하는 그런 프로젝트 개발자 구해요 어쩌구저쩌구 잘되나요',
    stackList: ['Front-end', 'Spring', 'Back-end', 'Typescript', 'Javascript', 'HTML/CSS', 'Android'],
    description: `가장 기본적인 리액트를 활용한 로그인 구현을 구현하고자 합니다. 우리 팀에서는 협업을 해본 개발자가 필요합니다. 현재 프로젝트 구현에 필요한 기본적인 구현들은 제작이 완료되었으며
    가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님.가장 기본적인 리액트를 활용한 로그인 구현을 구현하고자 합니다. 우리 팀에서는 협업을 해본 개발자가 필요합니다. 현재 프로젝트 구현에 필요한 기본적인 구현들은 제작이 완료되었으며
    가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님`,
    capacity: 4,
    view: 1,
    bookMark: true,
    status: 0,
  },
  {
    projectIdx: 2,
    title: '스터디원 구해요',
    stackList: ['Spring', 'Back-end'],
    description: ``,
    capacity: 4,
    view: 12,
    bookMark: true,
    status: 0,
  },
  {
    projectIdx: 2,
    title: '[서울]오프라인 스터디',
    stackList: ['Front-end', 'Typescript', 'Javascript', 'HTML/CSS'],
    description: `    가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님`,
    capacity: 10,
    view: 1,
    bookMark: false,
    status: 0,
  },
    ]

function reducer() {
  return stackList
}

function reducer2(state = recruitList, Action) {
  if (Action.type === 'bookMark') {
    let idx = state.findIndex( (a)=> {return a.projectIdx === Action.data.id})

    let copy = [...state];
    copy[idx].bookMark = !copy[idx].bookMark
    return copy;
  }
  return state;
}

let store = createStore( combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* 페이지 이동을 위한 셋팅 */}
      <Provider store={ store }> {/* redux사용을 위한 셋팅 */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
