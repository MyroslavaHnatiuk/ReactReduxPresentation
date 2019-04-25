import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Block.css';
import BlockItem from './BlockItem';
import {setTableOver} from '../actions/index';

const mapStateToProps = state => { 
  return {
    tableOver: state.tableOver,
    data: state.data
  }  
};

const mapDispatchToProps = dispatch => {
  return {
    setTableOver(tableOver){
  dispatch(setTableOver(tableOver))
}
    };
  }

class Container  extends Component {
  constructor(props) {
    super(props);
  }

  dragOver = function (e) {
  let tableOver = e.target.getAttribute('data-block-id');
  if(tableOver){
    this.props.setTableOver(tableOver)
  }
};

  render() { 
    const items = this.props.items;
    const name = this.props.name;
    const blockToMove = this.props.blockToMove;
    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" data-block-id = {name} onDragOver={(e)=>{this.dragOver(e)}}>
          <div className="block">
              <BlockItem items = {items} data = {this.props.data} blockStart={name} blockToMove={blockToMove}/>
          </div>
      </div>
    );
  }
}

const BlockContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
export default BlockContainer;