import React from 'react';

import Articles from '../components/Articles/Articles';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>THE HEADLINES</h1>
      <p>Find out what's happening around the UK today</p>
      <Articles />
    </div>
  );
}

export default App;
