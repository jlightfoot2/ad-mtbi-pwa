import React,{Component} from 'react';
import { reduxForm } from 'redux-form'
import D3LinearaGauge from './D3LinearaGauge.js';
import { connect } from 'react-redux';
import ReactTransitionGroup from 'react-addons-transition-group';
import {TweenLite} from 'gsap';

var styles = {
  container: {
    padding: 10
  }
};

class AssessmentText extends Component {
  componentWillAppear (callback) {
    this._animateIn(callback);
  }

  componentWillEnter (callback) {
    this._animateIn(callback);
  }

  _animateIn (callback) {
    var el = this.refs.assessmentText;
    TweenLite.set(el, {opacity: 0});
    setTimeout(function () {
      TweenLite.to(el, 1, {opacity: 1}).play().eventCallback('onComplete', callback);
    }, 1000);
  }

  render () {
    var {text} = this.props;
    return (
      <div style={styles.container} ref='assessmentText'>
        <p>{text}</p>
      </div>
    );
  }
}

const AssessmentResult = (props) => {
  const {resultDetails, device} = props;
  var gaugeWidth = 300;
  if (device.size === 'medium') {
    gaugeWidth = 500;
  } else if (device.size === 'large') {
    gaugeWidth = 700;
  }
  return (<div>
        <D3LinearaGauge width={gaugeWidth} {...props} />
        <ReactTransitionGroup>
            <AssessmentText text={resultDetails.conclusion} />
        </ReactTransitionGroup>
      </div>);
};

const mapStateToProps = (state) => {
  return {
    result: state.assessment.result,
    resultDetails: state.assessment.resultDetails,
    device: state.device,
    maxScore: 85 + 1,
    minScore: 0 - 1
  };
};
export default connect(
  mapStateToProps
)(AssessmentResult);
