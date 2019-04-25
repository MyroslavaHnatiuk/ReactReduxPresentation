import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import BlockContainer from './BlockContainer';
import { getDataFromState } from '../actions/index';

const mapStateToProps = state => {
    return { 
        data: state.data
    };
  };
  
function mapDispatchToProps(dispatch) {
return {
    getDataFromState: () => dispatch(getDataFromState()),
    };
}
  
class App extends Component {
    constructor(props) {
        super();
        props.getDataFromState();
    }

    elementDiff = (selected, all) => {
    let arr = [], diff = [];
    for (let i = 0; i < selected.length; i++) {
      arr[selected[i]] = true;
    }
    for (let i = 0; i < all.length; i++) {
      if (arr[all[i]]) {
        delete arr[all[i]];
      } else {
        arr[all[i]] = true;
      }
    }
    for (let k in arr) {
      diff.push(k);
    }
    return diff;
  };

render() {
    const data = this.props.data;
    console.log(data)
    return (
    <div className="container">
        <div className="row">
            <BlockContainer items = {this.elementDiff(data.selected, data.all)} name="all" blockToMove="selected"/>
            <BlockContainer items = {data.selected} name="selected" blockToMove="all"/>
        </div>
    </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);