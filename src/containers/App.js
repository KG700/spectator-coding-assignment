import React from 'react';

import Articles from '../components/Articles/Articles';
import Logo from '../components/Logo/Logo';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <p>Find out what's happening around the UK today</p>
      <div className={classes.Articles}>
        <Articles />
      </div>
    </div>
  );
}

export default App;
