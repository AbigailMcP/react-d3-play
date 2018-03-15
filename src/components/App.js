import React, { Component } from 'react';
import { csv } from 'd3-fetch';

import HighChart from './HighChart';
import BarChart from './BarChart';

import '../stylesheets/App.css';

export default class App extends Component {

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
        population: this.stringToNumber(row.Population),
        crime: this.stringToNumber(row["Violent crime"]),
        crimeRate: this.stringToNumber(row["Violent crime rate per 100k"]),
        vehicleTheft: this.stringToNumber(row["Motor vehicle theft"])
      };
    }).then((data) => {
      this.setState({data: data.slice(0,20)})
    });
  }

  stringToNumber(string) {
    return parseInt(string.replace(/,/, ''), 10)
  }

  render() {
    return (
      <div className='container'>
        <h1 className='title'>Welcome</h1>
        <p className='intro'>Woah</p>
        {this.state.data &&
          <div>
            <BarChart data={this.state.data} value='crime' size={[1000, 500]}/>
            <p className='intro'>Holy moley there's more</p>
            <HighChart data={this.state.data} value='crime' size={[1000, 500]}/>
          </div>
        }
      </div>
    );
  }
}
