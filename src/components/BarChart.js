import React, { Component } from 'react';

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';
import { axisBottom } from 'd3-axis';

import Bars from './Bars';

class BarChart extends Component {

  render() {
    const { data, columnWidth, size } = this.props;
    const heightLimit = size[1];
    const widthLimit = size[0];

    // Given a value from the domain, scaleLinear returns a value from the range
    const yScale = scaleLinear()
      .domain([0, max(data, row => row.crime)])
      .range([heightLimit, 0]);

    const xScale = scaleBand()
      .padding(0.5)
      .domain(data.map(row => row.area))
      .range([0, widthLimit]);

    return (
      <svg width={widthLimit} height={heightLimit}>
        <Bars
          data={data}
          xScale={xScale}
          yScale={yScale}
          heightLimit={heightLimit}
        />
      </svg>
    )
  }
}

export default BarChart;
