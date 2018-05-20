class Wrapper extends React.Component {
  constructor() {
    super();
    this.change = this.change.bind(this)
    this.state = {
      header:'hello'
    }

  }

  change() {
    this.setState((a) => {
      return {
        header:'cha'

      }
    });


  }
  render() {
    return (
      <div>
        <Header main = {this.state.header} title = {this.change}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.main}</p>
        <button onClick = {this.props.title}>click</button>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper/>,document.getElementById('app'));
