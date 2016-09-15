import React,{Component} from 'react';
import { reduxForm } from 'redux-form';

const style = {
	container: {
		height: '40px',
		display: 'block',
		clear: 'both'
	},
	horizontal: {
		float: 'left',
		padding: '5px',
		marginLeft: '5px'
	}
}

const RadioLists = ({choices,field}) => {
	return (
		<div style={style.container} >
			{choices.map(function(choice,i){
				return (
			 		<div style={style.horizontal} key={i} >
				 		<label >{choice.title}</label>
				 		
				 		<input type="radio" {...field} value={choice.value} checked={field.value===choice.value} />
				 
			 		</div>
			 		);
		 	})}
	 	</div>
	);
};

export default RadioLists;
