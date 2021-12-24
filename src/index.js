import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import stackListReducer from './modules/stackList';
import userReducer from './modules/user'
import { configureStore, } from '@reduxjs/toolkit';
import loginStepReducer from './modules/loginStep';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import recruitListReducer from './modules/recruitList'



// let recruitList = [
//   {
//     projectIdx: 0,
//     title: 'React를 활용한 간단한 로그인 기능 구현하기',
//     stackList: ['Front-end', 'Back-end', 'React'],
//     description: '리액트를 이용한 카카오 로그인 구현요',
//     capacity: 4,
//     view: 123,
//     bookMark: false,
//     status: 0,
//   },
//   {
//     projectIdx: 1,
//     title: '리액트로 저쩌구 어떤걸 할지는 나중에 정하는 그런 프로젝트 개발자 구해요 어쩌구저쩌구 잘되나요',
//     stackList: ['Front-end', 'Spring', 'Back-end', 'Typescript', 'Javascript', 'HTML/CSS', 'Android'],
//     description: `가장 기본적인 리액트를 활용한 로그인 구현을 구현하고자 합니다. 우리 팀에서는 협업을 해본 개발자가 필요합니다. 현재 프로젝트 구현에 필요한 기본적인 구현들은 제작이 완료되었으며
//     가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님.가장 기본적인 리액트를 활용한 로그인 구현을 구현하고자 합니다. 우리 팀에서는 협업을 해본 개발자가 필요합니다. 현재 프로젝트 구현에 필요한 기본적인 구현들은 제작이 완료되었으며
//     가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님`,
//     capacity: 4,
//     view: 1,
//     bookMark: true,
//     status: 0,
//   },
//   {
//     projectIdx: 2,
//     title: '스터디원 구해요',
//     stackList: ['Spring', 'Back-end'],
//     description: ``,
//     capacity: 4,
//     view: 12,
//     bookMark: true,
//     status: 0,
//   },
//   {
//     projectIdx: 3,
//     title: '[서울]오프라인 스터디',
//     stackList: ['Front-end', 'Typescript', 'Javascript', 'HTML/CSS'],
//     description: `    가족같은 분위기. 4대 보험 미가입. 연봉 협약없음. 다쳐도 우리 알바는 아님`,
//     capacity: 10,
//     view: 1,
//     bookMark: false,
//     status: 0,
//   },
//     ]

// let initialCard={
//   projectIdx: '',
//   title:'',
//   stackList: [],
//   description: '',
//   capacity: '',
//   view: 0,
//   bookMark: false,
//   statis: 0,
// }
// let idxCard = 4;


// function reducer2(state = recruitList, Action) {
//   if (Action.type === 'bookMark') {
//     let idx = state.findIndex( (a)=> {return a.projectIdx === Action.data.id})

//     let copy = [...state];
//     copy[idx].bookMark = !copy[idx].bookMark
//     return copy;
//   }
//   if (Action.type === 'Register') {
//     const input = Action.data.inputs;
//     let setCard = {...initialCard};
//     setCard.projectIdx= idxCard;
//     setCard.title= input.title;
//     setCard.stackList = input.stackList;
//     setCard.description = input.subjectDiscription;
//     setCard.capacity = input.capacity;
//     idxCard ++;
//     recruitList.push(setCard);
//   }
//   return state;
// }


const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user"],
}

const rootReducer = combineReducers({
  stackList: stackListReducer,
  user: userReducer,
  loginStep: loginStepReducer,
})

const persistReducers = persistReducer(persistConfig, rootReducer);


const store = configureStore ({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* 페이지 이동을 위한 셋팅 */}
      <Provider store={ store }> {/* redux사용을 위한 셋팅 */}
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
