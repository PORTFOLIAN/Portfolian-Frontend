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
import recruitListReducer from './modules/recruitList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import recruitListReducer from './modules/recruitList'




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
  storage,
  whitelist: ["user"],
}

const rootReducer = combineReducers({
  stackList: stackListReducer,
  user: userReducer,
  loginStep: loginStepReducer,
  recruitList: recruitListReducer,
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
