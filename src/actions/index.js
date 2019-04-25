import {
  GET_DATA,
  SET_POSITION,
  RESET_DRAG_OBJECT,
  UPDATE_SELECTED_STATE,
  SET_TABLE_OVER
} from '../constants/actionTypes';

export const getDataFromState = () => ({
  type: GET_DATA
});

export const setPosition = function(elemName, blockStart, blockToMove) {
  return {type: SET_POSITION, elemName, blockStart, blockToMove};
};

export const resetDragObject = function() {
  return {type: RESET_DRAG_OBJECT};
};

export const updateSelectedState = function(selectedArray) {
  return {type: UPDATE_SELECTED_STATE, selectedArray};
};

export const setTableOver = function(tableOver) {
  return {type: SET_TABLE_OVER, tableOver};
};
