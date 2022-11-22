import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";
import { useState } from "react";

const NewExpense = function (prp) {
  const [formState, setFormState] = useState(false);

  const saveExpenseDataHandler = function (inputExpenseData) {
    const expenseData = {
      id: Math.trunc(Math.random() * 1000).toString(),
      ...inputExpenseData,
    };

    prp.onAdd(expenseData);
  };

  const content = formState ? (
    <ExpenseForm
      onSave={saveExpenseDataHandler}
      onCancel={() => setFormState(false)}
    />
  ) : (
    <button onClick={() => setFormState(true)}>Add New Expense</button>
  );

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
