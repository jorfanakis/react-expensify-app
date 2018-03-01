import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={0} expenseTotal={234} />);
  expect(wrapper).toMatchSnapshot()
});

test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={expenses[0].amount} />);
  expect(wrapper).toMatchSnapshot()
});

test('should render ExpenseSummary with expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={23} expenseTotal={1230947327} />);
  expect(wrapper).toMatchSnapshot()
});
