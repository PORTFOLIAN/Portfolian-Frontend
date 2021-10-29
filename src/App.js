import React, { useState } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
// import GoogleButton from './components/GoogleButton';
// import KaKaoLogin from './components/KaKaoLogin';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Project from './components/Project';

function App() {
  let [card, setCard] = useState({states: 'abc'});

  return (
    <div>
      <Navbar />
      <Route path="/main">
        <Main />
      </Route>
      <Route path="/project">
        <Project />
      </Route>
    </div>
  );
}

export default App;
