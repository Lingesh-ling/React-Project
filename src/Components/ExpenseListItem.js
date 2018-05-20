import React from 'react';

const ExpenseListItem = ({description,note,amount}) => (
  <div>
    <p>  {description}  </p>
    <p>  {amount}  </p>
    
  </div>
);

export default ExpenseListItem;
