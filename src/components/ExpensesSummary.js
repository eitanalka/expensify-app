import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    <p>
      Viewing {props.expenses.length} expense{props.expenses.length !== 1 ? 's' : null} totalling {numeral(props.total / 100).format('$0,00.00')}
    </p>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
  total: selectExpensesTotal(state.expenses)
});

export default connect(mapStateToProps)(ExpensesSummary);