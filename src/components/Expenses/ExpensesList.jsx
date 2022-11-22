import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem.jsx";

const ExpensesList = function (prp) {
  const content = prp.items.map((v) => (
    <ExpenseItem key={v.id} date={v.date} title={v.title} ammount={v.amount} />
  ));

  return <ul className="expenses-list">{content}</ul>;
};

export default ExpensesList;
