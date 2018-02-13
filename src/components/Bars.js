import React, { Component } from 'react';

class Bars extends Component {

  render() {
    const { data, xScale, yScale, heightLimit } = this.props;

    const rects = data.map((point, index) => {
      return (
        <rect
          key={index}
          fill={'#fe9922'}
          x={xScale(point.area)}
          y={yScale(point.crime)}
          height={heightLimit - yScale(point.crime)}
          width={xScale.bandwidth()}
        />
      )
    });

    return <g>{rects}</g>
  }
}

export default Bars;
