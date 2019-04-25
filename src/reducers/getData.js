import {
  GET_DATA,
  UPDATE_SELECTED_STATE,
} from '../constants/actionTypes';

const INITIAL_STATE = {
  all: ['analyst', 'executor', 'investigator', 'manager', 'administrator'],
  selected: []
}

function dataReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_DATA : {
      return Object.assign({}, state, {
        all: INITIAL_STATE.all
      });
    }
    case UPDATE_SELECTED_STATE : {
      return Object.assign({}, state, {
        selected: action.selectedArray
      });
    }
    default : return state;
  }
}

export default dataReducer;
