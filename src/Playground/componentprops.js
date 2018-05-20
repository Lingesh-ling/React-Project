import Myname, {age, drink} from './check.js';
import validator from 'validator';
import React from 'react';
import ReactDOM from  'react-dom';

const myname = <p>finalyy</p>;

class Header extends React.Component {
  state = {
    name:'Lesh'
  };
  namechange = () => {

    this.setState((a) => {
      return {
      name:'Lingesh'
    }
    })
  };
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <Subb title = {this.namechange}/>
      </div>
    );
  };
};

class Subb extends React.Component {
  render() {
    return(
      <div>
        <button onClick = {this.props.title}>Click</button>
      </div>
    );
  }
}

ReactDOM.render(<Header/>,document.getElementById('app'))
