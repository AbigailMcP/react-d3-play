import React, { Component } from 'react';
import { csv } from 'd3-fetch';

import BarChart from './BarChart';

import '../stylesheets/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    csv('https://s3.eu-west-2.amazonaws.com/us-crime-data/data.csv', (row) => {
      // Accessor function provided to d3.csv, the return value being the
      // individual data objects in the data array
      return {
        area: row.Area,
        crime: parseInt(row["Violent crime"].replace(/,/, ''), 10)
      };
    }).then((data) => {
      this.setState({data: data})
    });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Welcome to the best visualisation page that ever got visualised</h1>
        <p className='intro'>Look at this c00l data</p>
        {this.state.data ? <BarChart data={this.state.data} size={[500, 500]}/> : null}
      </div>
    );
  }
}

export default App;
