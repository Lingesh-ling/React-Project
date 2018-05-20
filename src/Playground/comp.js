




class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.minusOne = this.minusOne.bind(this);
    this.state = {
      count: 23
    }
  }

  minusOne() {
    this.setState((a) => {
      return {
        count:a.count+1
      }
    });
  }
    render() {
      const Textt = 'Hello';
      return (
        <div>
          <Header titlee = {Textt}/>
          <p>count:{this.state.count}</p>
          <button onClick = {this.minusOne}>minus 1</button>
        </div>
      );
    }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.titlee}</p>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper/>,document.getElementById('app'))
