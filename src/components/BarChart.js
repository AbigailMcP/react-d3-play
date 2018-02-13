import React, { Component } from 'react';

import { scaleLinear, scaleBand } from 'd3-scale';
import { max } from 'd3-array';

import Bars from './Bars';

class BarChart extends Component {

  render() {
    const { data, size } = this.props;
    const heightLimit = size[1];
    const widthLimit = size[0];

    // Given a value from a continuous domain, returns the height of each column
    // to fit inside max chart height
    const yScale = scaleLinear()
      // Domain is the crime counts
      .domain([0, max(data, row => row.crime)])
      .range([heightLimit, 0]);

    // Given a value from a discrete domain, returns width of each column to fit
    // inside max chart width
    const xScale = scaleBand()
      // Take into account space between columns
      .padding(0.3)
      // Domain is the discrete area labels
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
