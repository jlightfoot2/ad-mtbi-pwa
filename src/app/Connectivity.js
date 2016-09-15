import React,{Component} from 'react';
import { connect } from 'react-redux';
import {showFlashMessage} from './actions';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: '10px'
  },
  desktop: {
  }
};

const Connectivity = (props) => {
	var {isOnline,flashMessage} = props;
	const onlineMessage = function(){
		if(!isOnline){
			flashMessage("This feature is not available offline")
		}
	}
	return (
		<div onTouchTap={onlineMessage}>
			{React.cloneElement(props.children, Object.assign({ isOnline },props))}
		</div>
		)
}




const mapStateToProps = (state,ownProps) => {
  return {
    isOnline: state.app.connectivity.status === 1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flashMessage: (text) => dispatch(showFlashMessage(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Connectivity);