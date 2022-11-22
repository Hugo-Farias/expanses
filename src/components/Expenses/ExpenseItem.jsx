import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = function (prp) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={prp.date} />
      <div className="expense-item__description">
        <h2>{prp.title}</h2>
        <div className="expense-item__price">${prp.ammount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
