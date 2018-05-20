import {createStore} from 'redux';

const store = createStore((state = {count:10}, action) => {

  switch (action.type) {
    case 'INCREAMENT':
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
     return {count:state.count + incrementBy};
    case 'DECREAMENT': return {count:state.count - 1};

    default: return state;
  };

});


const unsub = store.subscribe(() => {
console.log(store.getState());
});


store.dispatch({
  type:'INCREAMENT',
  incrementBy: 100
});

unsub();

store.dispatch({
  type:'INCREAMENT'
});

store.dispatch({
  type:'INCREAMENT'
});
store.dispatch({
  type:'DECREAMENT'
});
