import React, { Component } from 'react';

export default class Bars extends Component {

  render() {
    const { data, xScale, yScale, value, margin, height } = this.props;
    // Map over data array and draw a rectangle with d3-calculated x and y
    // coordinates and width and height.
    const rects = data.map((point, index) => {
      return (
        <rect
          key={index}
          fill={'#fe9922'}
          x={xScale(point.area)}
          y={yScale(point[value])}
          height={height - margin - yScale(point[value])}
          width={xScale.bandwidth()}
        />
      )
    });
    return <g>{rects}</g>
  }
}
