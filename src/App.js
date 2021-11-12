import React, { useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleButton from './components/GoogleButton';
// import KaKaoLogin from './components/KaKaoLogin';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Project from './pages/Write';

function App() {
  let [card, setCard] = useState({states: 'abc'});

  return (
    <div>
      <Navbar />
      <Route path="/main" path="/">
        <Main />
      </Route>
      <Route path="/write">
        <Project />
      </Route>
    </div>
  );
}

export default App;
