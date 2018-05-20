import React from 'react';
import {connect} from 'react-redux';
import {showmyNAme} from '../actions/myname.js';

const Myname = (props) => (
  <div>
    <input type = 'text' value = '' onChange = {(e) => {
      props.dispatch(showmyNAme(e.target.value))
    }}/>
    <p>{props.myn.text}</p>
  </div>
);

const mapStatetoProps = (state) => {
  return {
    myn:state.makes,
  }
}

export default connect(mapStatetoProps)(Myname);
