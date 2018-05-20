let visibilitty = false;
const togglevisible = () => {
  visibilitty = !visibilitty;
  render();
}
const render = () => {
  const jsx = (
    <div>
      <h1>Visibility</h1>
      <button onClick = {togglevisible}>
        {
          visibilitty ? 'show' : 'false'
        }
      </button>
      {
        visibilitty && (<div><p>show</p></div> )
      }
    </div>
  );
  ReactDOM.render(jsx,document.getElementById('app'))
};

render();
