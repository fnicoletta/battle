import React, { Component } from 'react';
import './index.css';
import Popular from './components/popular.js';
import Battle from './components/battle.js';

class App extends Component {
  render() {
  return (
    <div className='container'>
      <Popular />
    </div>
  );
}
}

export default App;