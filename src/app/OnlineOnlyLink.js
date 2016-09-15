import { Link, browserHistory } from 'react-router'
import React,{Component} from 'react';

const OnlineOnlyLink = function(props){
	var {isOnline} = props;
	if(isOnline){
		return <Link {...props}>{props.children}</Link>;
	}else{
		return <span  {...props}>{props.children}</span>;
	}
}

export default OnlineOnlyLink;

