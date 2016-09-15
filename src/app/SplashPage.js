import { Link, browserHistory } from 'react-router';
import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const styles = {
  content: {
    paddingTop: '10px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
  }
};
const Splash = () => {
	return (<div style={styles.content}><CircularProgress /></div>);
};

export default Splash;
