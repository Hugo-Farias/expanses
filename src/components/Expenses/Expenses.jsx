import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expanses = function (prp) {
  return (
    <Card className="expenses">
      {prp.items.map((v, i) => (
        <ExpenseItem key={i} date={v.date} title={v.title} ammount={v.amount} />
      ))}
    </Card>
  );
};

export default Expanses;
