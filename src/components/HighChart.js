import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

export default class HighChart extends Component {

  config() {
    return {
      chart: {
        height: this.props.size[1],
        width: this.props.size[0]
      },
      title: { text: '' },
      xAxis: {
        categories: this.categories()
      },
      yAxis: {
        title: {
          text: null
        }
      },
      series: [{
        data: this.values(),
        type: 'column',
        color: '#fe9922'
      }],
      legend: {
        enabled: false
      }
    }
  }

  categories() {
    return this.props.data.map((point) => {
      return point.area;
    })
  }

  values() {
    return this.props.data.map((point) => {
      return point[this.props.value];
    })
  }

  render() {
    return (
      <div className='highchart'>
        <ReactHighcharts config = {this.config()}></ReactHighcharts>
      </div>
    )
  }
}
