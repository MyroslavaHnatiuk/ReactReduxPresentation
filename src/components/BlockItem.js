import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Block.css';
import { setPosition, resetDragObject, updateSelectedState} from '../actions/index';

const mapStateToProps = state => { 
  return {
    data: state.data,
    dragObject: state.dragObject
  }
};
  
const mapDispatchToProps = dispatch => {
  return {
    setPosition(elemName, blockStart, blockToMove){
      dispatch(setPosition(elemName, blockStart, blockToMove))
    },

    updateSelectedState(selectedArray){
      dispatch(updateSelectedState(selectedArray))
    },

    resetDragObject(){
      dispatch(resetDragObject())
    },

    };
  }

class ConnectedList extends Component {
  constructor(props) {
        super();     
        this.dragStart = this.dragStart.bind(this);   
      }

      dragStart(e, elemName, blockStart, blockToMove){
        this.props.setPosition(elemName, blockStart, blockToMove);
        return false;
      };
    dragEnd = function (e) {
      this.finishDrag()
      resetDragObject()
    };

    finishDrag = () => {
    let tableOver = this.props.dragObject.tableOver;
    if (!tableOver || tableOver !== this.props.dragObject.blockToMove) {
    return
    }
    else {
    let newObj;
    let locationToMove = this.props.blockToMove;

    if (locationToMove === 'all' && tableOver === 'all') {
      let index = this.props.data.selected.indexOf(this.props.dragObject.elemName);
      if (index > -1) {
        newObj = this.props.data.selected.slice(0, index).concat(this.props.data.selected.slice(index+1));
        this.props.updateSelectedState(newObj);
      }
    } else if (locationToMove === 'selected' && locationToMove === 'selected') {
      newObj = this.props.data.selected.concat(this.props.dragObject.elemName);
      this.props.updateSelectedState(newObj);
    }
    }
};

  render() {
  const items = this.props.items;
  const blockStart = this.props.blockStart;
  const necessaryBlock = this.props.blockToMove;
  return (
    <div className="list-group list-group-flush">
      {(items || []).map(el => (
        <div key = {el} draggable="true" className="draggable-field element" style={{zIndex: '999'}}  onDragStart = {(e)=> {this.dragStart(e, el, blockStart, necessaryBlock)}} onDragEnd={(e)=> {this.dragEnd(e)}}>
          <span className="text">{el}</span>
        </div>
      ))}
    </div>
    )}
  }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);