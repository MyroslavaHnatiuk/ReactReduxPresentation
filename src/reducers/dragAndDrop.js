const INITIAL_STATE = {
    tableOver: "",
    elemName: "",
    blockStart: "",
    blockToMove: ""
}

function dragAndDropReducer(state = INITIAL_STATE, action="") {
    switch (action.type) {
        case 'SET_POSITION': 
            return Object.assign({}, state, {
                elemName: action.elemName,
                blockStart: action.blockStart,
                blockToMove: action.blockToMove
            })
        case 'RESET_DRAG_OBJECT':
            return Object.assign({}, state, {
                tableOver: "",
                elemName: "",
                blockStart: "",
                blockToMove: ""
            });
        case 'SET_TABLE_OVER':
            return Object.assign({}, state, {
                tableOver: action.tableOver
            });
        default:
            return state;
    }
};
export default dragAndDropReducer;
