import React, { Component } from 'react';
import './BarChart.css';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

class BarChart extends Component {
  render() {
    const width = 25;
    const dataMax = max(this.props.data);
    const upperLimit = this.props.size[1];
    // Given a value from the domain, scaleLinear returns a value from the range
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, upperLimit]);

    const rects = this.props.data.map((point, index) => {
      return (
        <rect
          key={index}
          fill={'#fe9922'}
          x={index * width}
          y={upperLimit - yScale(point)}
          height={yScale(point)}
          width={width}
        />
      )
    });

    return (
      <svg width={this.props.data.length * width} height={upperLimit}>{rects}</svg>
    )
  }
}

export default BarChart;
