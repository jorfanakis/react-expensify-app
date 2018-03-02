import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
});

test('should add expense with default to database store', (done) => {
  const store = createMockStore({});
  const expenseDefault = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
  });
});
// test('should setup addExpense action object with default values', () => {
//   const expenseData = {
//     description: '',
//     amount: 0,
//     createdAt: 0,
//     note: ''
//   };
//   const result = addExpense();
//   expect(result).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });