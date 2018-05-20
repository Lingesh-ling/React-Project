import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
      <div>
        <h1>Expensify</h1>
          <NavLink to = '/' activeClassName = 'is-active' exact = {true}>Home</NavLink>
          <NavLink to = '/create' activeClassName = 'is-active'>Create</NavLink>
          <NavLink to = '/EditExpensePage' activeClassName = 'is-active'>Edit</NavLink>
          <NavLink to = '/HelpPage' activeClassName = 'is-active'>Help</NavLink>
      </div>
  );
};

export default Header;
