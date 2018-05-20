import {addExpense} from '../../actions/expenses';

test('add Expense', () => {
  const expenseData = {
    description:'Rent',
    amount:100,
    createdAt:100,
    note:'llll'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
        type:'ADD_EXPENSE',
    expense: {
        ...expenseData,
      id: expect.any(String)
    }
  });
});

//
// test('should setup add expense action object with provided values', () => {
//   const expenseData = {
//     description: 'Rentt',
//     amount: 109500,
//     createdAt: 1000,
//     note: 'This was last months rent'
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });
