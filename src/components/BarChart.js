import React, { Component } from 'react';

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

import Bars from './Bars';
import Axis from './Axis';

export default class BarChart extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { data, value, size } = this.props;
    const height = size[1];
    const width = size[0];
    const margin = 100;

    // Given a value from a continuous domain, returns the height of each column
    // to fit inside max chart height
    const yScale = scaleLinear()
      // Domain is the crime counts
      .domain([0, max(data, row => row[value])])
      .range([height - margin, 0]);

    // Given a value from a discrete domain, returns width of each column to fit
    // inside max chart width
    const xScale = scaleBand()
      // Take into account space between columns
      .padding(0.3)
      // Domain is the discrete area labels
      .domain(data.map(row => row.area))
      .range([margin, width]);

    return (
      <svg width={width} height={height}>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          value={value}
          margin={margin}
          height={height}
        />
        <Axis scale={xScale} position='bottom' margin={margin} height={height}/>
        <Axis scale={yScale} position='left' margin={margin} height={height}/>
      </svg>
    )
  }
}
