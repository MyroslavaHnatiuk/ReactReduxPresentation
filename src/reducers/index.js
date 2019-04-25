import { combineReducers } from 'redux';
import dataReducer from './getData';
import dragAndDropReducer from './dragAndDrop';

const rootReducer = combineReducers({
  data: dataReducer,
  dragObject: dragAndDropReducer
});

export default rootReducer;