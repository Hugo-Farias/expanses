import { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

let num = 0;

const ExpenseItem = function (prp) {
  const [title, setTitle] = useState(prp.title);

  const buttonHandler = function () {
    setTitle(`Updated${num}`);
    ++num;
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={prp.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{prp.ammount}</div>
      </div>
      <button onClick={buttonHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
