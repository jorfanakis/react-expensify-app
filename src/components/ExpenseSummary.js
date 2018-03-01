import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expenseSummary from '../selectors/expenses-total';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <div>
    {
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedTotal}</h1>
    }
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: expenseSummary(visibleExpenses)
  };
};

const ConnectedExpenseSummary = connect(mapStateToProps)(ExpenseSummary);

export default ConnectedExpenseSummary;