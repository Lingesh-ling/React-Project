import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <p>Lingesh {props.inf}</p>
    </div>
  );
};

const Requiree = (Wrappedcom) => {
  return (props) => (
    <div>
    <p>This is new</p>
    <Wrappedcom {...props}/>
    </div>
  );
}

const Hoo = Requiree(Info);
ReactDOM.render(<Hoo inf = 'ink'/>,document.getElementById('app'));
