import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import Header from '../Components/Header';
import HelpPage from '../Components/HelpPage';
import NotFound from '../Components/NotFound';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path = '/' component = {ExpenseDashboardPage} exact = {true}/>
        <Route path = '/create' component = {AddExpensePage}/>
        <Route path = '/EditExpensePage/:id' component = {EditExpensePage}/>
        <Route path = '/HelpPage' component = {HelpPage}/>
        <Route component = {NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);


export default AppRouter;
