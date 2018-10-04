import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} total={expenses[0].amount}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses', () => {
  const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const wrapper = shallow(<ExpensesSummary expenses={expenses} total={total}/>);
  expect(wrapper).toMatchSnapshot();
});