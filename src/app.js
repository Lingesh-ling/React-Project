import validator from 'validator';
import React from 'react';
import ReactDOM from  'react-dom';
import AppRouter from './Routers/appRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import visibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import 'normalize.css';
import './Styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description:'helllo'}));
store.dispatch(addExpense({description:'welcoome'}));
store.dispatch(setTextFilter('he'));

const state = store.getState();
const visible = visibleExpenses(state.expenses,state.filters);

console.log(visible);


const jsx = (
  <Provider store = {store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx,document.getElementById('app'))
