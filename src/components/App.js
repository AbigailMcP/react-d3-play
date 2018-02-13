import React, { Component } from 'react';
import { csv } from 'd3-fetch';

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
    console.log(this.state.data);
    return (
      <div className='container'>
        <h1 className='title'>Welcome to the best visualisation page that ever got visualised</h1>
        <p className='intro'>Look at this c00l data</p>
        {this.state.data ?
          <div>
            <div><BarChart data={this.state.data} value='vehicleTheft' size={[1000, 500]}/></div>
            <div><BarChart data={this.state.data} value='crimeRate' size={[1000, 500]}/></div>
            <div><BarChart data={this.state.data} value='crime' size={[1000, 500]}/></div>
          </div>
          : null
        }
      </div>
    );
  }
}
