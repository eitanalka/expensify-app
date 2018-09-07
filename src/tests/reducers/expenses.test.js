import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenss if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: 3,
    note: '',
    description: '',
    createdAt: 2000,
    amount: 3000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
  const updates = {
    note: 'note',
    description: 'description',
    createdAt: 0,
    amount: 3000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], { ...expenses[2], ...updates }]);
});

test('should not edit expense if expense not found', () => {
  const updates = {
    note: 'note',
    description: 'description',
    createdAt: 0,
    amount: 3000
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses]);
});