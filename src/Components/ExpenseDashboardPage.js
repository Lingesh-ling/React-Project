import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
  <div>
    this is fronm ExpenseDashboardPage
    <ExpenseListFilter/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
