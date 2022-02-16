import React from 'react';
import './App.css';
import { Route, Router, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import GoogleButton from './components/GoogleButton';
// import KaKaoLogin from './components/KaKaoLogin';
import Main from './pages/main/main';
import Write from './pages/write/write';
import Project from './pages/project/project';
import Profile from './pages/profile/profile';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      {/* <Navbar /> 네브바를 각 페이지 안에다가 배치해서 페이지 넘어갈때마다 리프레시토큰 요청하게할까? ㅇㅇ */}
      <Switch>
        <Route exact path={["/", "/main"]}>
          <Main />
          <Footer></Footer>
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/projects">
          <Project />
          <Footer></Footer>
        </Route>
        <Route path="/users">
          <Profile />
          <Footer></Footer>
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
