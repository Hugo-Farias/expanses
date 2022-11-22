import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = function (prp) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = function (e) {
    setInputTitle(e.target.value);
  };

  const amountChangeHandler = function (e) {
    const value = e.target.value;
    setInputAmount(value);
    // e.target.value = "$" + value;
  };

  const dateChangeHandler = function (e) {
    setInputDate(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    prp.onSave(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            maxLength="30"
            value={inputTitle}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            placeholder="Amount"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
