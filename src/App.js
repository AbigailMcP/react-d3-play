import React, { Component } from 'react';
import BarChart from './BarChart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Welcome to the best visualisation page that ever got visualised</h1>
        <p className='intro'>Look at this c00l data</p>
        <BarChart data={[5,50,1,3]} size={[500, 500]}/>
      </div>
    );
  }
}

export default App;
