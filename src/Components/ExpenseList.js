import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Mynn from './Myname';
import visible from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <Mynn/>
    <p>Lingesh</p>
    {props.expenses.map((expense) => {
      return (
        <ExpenseListItem key = {expense.id} {...expense}/>
      )
    })}
  </div>
);

const mapStatetoProps = (state) => {
  return {
    expenses:visible(state.expenses,state.filters)
  }
}

export default connect(mapStatetoProps)(ExpenseList);
