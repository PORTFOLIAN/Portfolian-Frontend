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

function App() {
  return (
    <>
      <Switch>
        <Route exact path={['/', '/main']}>
          <Main />
        </Route>
        <Route path='/write'>
          <Write />
        </Route>
        <Route path='/projects'>
          <Project />
        </Route>
        <Route path='/users'>
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
