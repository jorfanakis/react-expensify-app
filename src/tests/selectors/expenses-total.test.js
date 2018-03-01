import getExpensesSummary from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should sum up expenses correctly', () => {
  const total = getExpensesSummary(expenses);
  const control = expenses.reduce((acc, exp) => acc + exp.amount, 0);
  expect(total).toBe(control);
});

test('should sum up one expense correctly', () => {
  const total = getExpensesSummary(expenses.slice(0,1));
  const control = expenses[0].amount;
  expect(total).toBe(control);
});

test('should sum up zero expeses correctly', () => {
  const total = getExpensesSummary([]);
  expect(total).toBe(0);
});