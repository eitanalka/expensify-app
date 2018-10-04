import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={1000}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={3000}/>);
  expect(wrapper).toMatchSnapshot();
});