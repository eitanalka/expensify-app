export default (expenses) => {
  return expenses.reduce((sum, value) => {
    return sum + value.amount;
  }, 0);
};