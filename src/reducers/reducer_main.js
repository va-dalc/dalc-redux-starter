// reducers/reducer_main.js

import {THIS_TEST} from '../actions/index';

const INITIAL_STATE = { test: false };

export default function (state = INITIAL_STATE, action) {
	switch(action.type) {
		case THIS_TEST: 
			return {...state, test: action.payload};	
		default:
			return state;
	}
}

