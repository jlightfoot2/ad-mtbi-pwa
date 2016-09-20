import React,{Component} from 'react';

import d3Chart from './lib/d3t2/LinearGauge.js';
var sampleData = [

];

var Gauge = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  },

  componentDidMount: function () {
    var el = this.refs.assessmentGauge;
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function () {
    var el = this.refs.assessmentGauge;
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function () {
    return {
      data: this.props.result,
      domain: {x: [this.props.minScore, this.props.maxScore], y: [0, 100]},
      width: this.props.width || 500
    };
  },

  componentWillUnmount: function () {
    var el = this.refs.assessmentGauge;
    d3Chart.destroy(el);
  },

  render: function () {
    const {width} = this.props;
    return (
      <div style={{width: width, margin: 'auto auto auto auto'}} ref="assessmentGauge">
        <svg />
      </div>
    );
  }
});

export default Gauge;
