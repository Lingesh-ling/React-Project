import {createStore} from 'redux';

const mynewname = ({neww = 'Arun'} = {}) => ({
  type:'Lin',
  neww

});

const store = createStore(
  (name = {myname:'Lingesh'}, action) => {
  switch(action.type) {
    case 'Lin': return {myname:action.neww};
    default: return name;
  };
});
store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(mynewname({neww:'Harish'}));
store.dispatch(mynewname());



// import {createStore} from 'redux';
//
//
// const incrementone = ({incrementBy = 1000} = {}) => ({
//   type:'INCREAMENT',
//   incrementBy
// })
//
// const store = createStore(
//   (state = {count:0}, action) =>
//    {
//      switch(action.type) {
//        case 'INCREAMENT': return {count:state.count + action.incrementBy};
//        case 'Decrement': return {count:state.count - 10};
//        default:return state;
//      };
//    }
//   );
//
//
//
//
//
// store.dispatch(incrementone({incrementBy:100}));
// store.dispatch(incrementone({}));
// console.log(store.getState());
