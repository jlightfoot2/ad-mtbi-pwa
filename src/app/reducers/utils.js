/**
 * Below are convenience functions to prevent mutations
 */

/**
 * Update object/Map member and
 *
 * @return object A new object representing the new state
 */
//TODO consider refactoring updateMapItem without id param, I'm not sure the id param is necessary or beneficial
// the id param was to help updating properties that were themselves objects
// would refactored version even necessary given {...state}
export const updateMapItem  = function(state,id,cb){
	var newState = {...state};
	var item = typeof cb === 'undefined' ? newState : newState[id+""];
	const itemCb = cb || id;
    //TODO 
	if(typeof cb === 'undefined'){
		newState = {...itemCb(null,item)};
	}else{
		newState[id+""] = {...itemCb(null,item)};
	}
	
	return newState;
}

export const arrayHasItem = function(arr,val){
	return arr.indexOf(val) > -1
}

/**
 * Adds an item to an array and returns a new array
 * @param  Array arr the current array
 * @param  Any val The new value to append to the array
 * @return Array     The new array representing the new state
 */
export const arrayPush = function(arr,val){
	arr.push(val);
	return [...arr];
}

/**
 * Same as arrayPush but ensures no duplicates are added
 */
export const arrayPushUnique = function(arr,val){
	if(!arrayHasItem(arr,val)){
		return arrayPush(arr,val)
	}
	return [...arr];
}

/**
 * Returns a new array respresenting the old array less the provided value
 * @param  Array arr  The target array
 * @param  Any val The value we want to target for removal
 * @return Array     The new array representing the new state
 */
export const arrayDeleteValue = function(arr,val){
	if(arrayHasItem(arr,val)){
		arr.splice(arr.indexOf(val),1);
	}
	return [...arr];
}