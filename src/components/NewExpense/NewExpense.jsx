import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";

const NewExpense = function (prp) {
  const saveExpenseDataHandler = function (inputExpenseData) {
    const expenseData = {
      id: Math.trunc(Math.random() * 1000).toString(),
      ...inputExpenseData,
    };

    prp.onAdd(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
