class Wrapper extends React.Component {
  render() {
    const title = 'New page';

    return (
      <div>
        <Header titlee = {title}/>
        <Footer/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
      <p>  {this.props.titlee}</p>
      </div>
    );
  }
}

class Footer extends React.Component {
  alertName(e) {
    e.preventDefault();
    const option = e.target.elements.options.value;
    if(option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.alertName}>
          <input type = 'text' name = 'options'/>
          <button>Add options</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Wrapper/>,document.getElementById('app'))
