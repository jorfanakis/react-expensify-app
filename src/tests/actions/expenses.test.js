import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup removeExpense action object', () => {
  const result = removeExpense({ id: '123abc'});
  expect(result).toEqual({type: 'REMOVE_EXPENSE', id: '123abc'})
});

test('should setup editExpense action object', () => {
  const result = editExpense('123abc', { note: 'Update that note!'});
  expect(result).toEqual({ 
    type: 'EDIT_EXPENSE', 
    id: '123abc', 
    updates: { 
      note: "Update that note!"
    }
  });
});

test('should setup addExpense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This last months rent'
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup addExpense action object with default values', () => {
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});