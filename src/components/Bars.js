import React, { Component } from 'react';

export default class Bars extends Component {

  render() {
    const { data, xScale, yScale, marginBottom, heightLimit } = this.props;
    const rects = data.map((point, index) => {
      return (
        <rect
          key={index}
          fill={'#fe9922'}
          x={xScale(point.area)}
          y={yScale(point.crime)}
          height={heightLimit - marginBottom - yScale(point.crime)}
          width={xScale.bandwidth()}
        />
      )
    });
    return <g>{rects}</g>
  }
}
