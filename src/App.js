import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import GoogleButton from './components/GoogleButton';
// import KaKaoLogin from './components/KaKaoLogin';
import Main from './pages/main/main';
import Write from './pages/write/write';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path={["/", "/main"]}>
            <Main />
          </Route>
          <Route path="/write">
            <Write />
          </Route>

        </Switch>

    </>



























































































































































  );
}

export default App;
