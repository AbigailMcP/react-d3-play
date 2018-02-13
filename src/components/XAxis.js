import React, { Component } from 'react';

import { axisBottom } from 'd3-axis';
import { select } from 'd3-selection';

import '../stylesheets/BarChart.css'

export default class Axis extends Component {

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const axis = axisBottom()
      .scale(this.props.scale)

    select(this.axisElement).call(axis);
  }

  render() {
    const { marginBottom, heightLimit } = this.props;

    return (
      <g
        className='x-axis'
        ref={(el) => { this.axisElement = el; }}
        transform={`translate(0, ${heightLimit - marginBottom})`}
      />
    )
  }

}
