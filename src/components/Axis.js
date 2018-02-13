import React, { Component } from 'react';

import { axisBottom, axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

import '../stylesheets/BarChart.css'

// React renders a <g> component, and afterwards d3 creates our axis
export default class Axis extends Component {

  componentDidMount() {
    this.renderAxis();
  }

  // Re-render the axis after each update for responsiveness
  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    const axis = this.props.position === 'left' ? axisLeft() : axisBottom();
    axis.scale(this.props.scale)
    // d3 `select` selects the first element that matches the selector string
    // and `call` invokes the function `axis` on the selection
    select(this.axisElement).call(axis);
  }

  transformAxis() {
    const { margin, height } = this.props;

    if (this.props.position === 'left') {
      return `translate(${margin}, 0)`;
    } else {
      return `translate(0, ${height - margin})`;
    }
  }

  // Creates the <g> component and assigns it a ref so that we can references it
  // in above lifecycle methods
  render() {
    return (
      <g className='axis' ref={(el) => { this.axisElement = el; }} transform={this.transformAxis()}/>
    )
  }
}
