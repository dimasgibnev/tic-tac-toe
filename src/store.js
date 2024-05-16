import {appReducer} from './reducer'
import { createStore } from 'redux';

export const store = createStore(appReducer);

store.subscribe(() => console.log(store.getState()))