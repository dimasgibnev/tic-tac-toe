import {appReducer} from './reducer'
// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
// 	reducer: appReducer
// });


// store.subscribe(() => console.log(store.getState()))

const createStore = (reducer) => {
	let state;

	return {
		dispatch: (action) => {
			state = reducer(state, action);
		},
		getState: () => state
	};
};

export const store = createStore(appReducer)

store.dispatch({})