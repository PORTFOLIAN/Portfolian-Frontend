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
import writeReducer from './modules/write'
import { configureStore, } from '@reduxjs/toolkit';
import loginStepReducer from './modules/loginStep';
import recruitListReducer from './modules/recruitList';
import projectReadReducer from './modules/projectRead'
import profileReadReducer from './modules/profileRead'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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
  write: writeReducer,
  projectRead: projectReadReducer,
  profileRead: profileReadReducer,
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
