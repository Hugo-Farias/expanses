import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import FilterExpenses from "./FilterExpenses.jsx";
import { useState } from "react";

const Expanses = function (prp) {
  const [filterYear, setFilterYear] = useState("");

  const filterYearHandler = (value) => setFilterYear(value);

  const filterList = !filterYear
    ? prp.items
    : prp.items.filter((v) => v.date.getFullYear().toString() === filterYear);

  return (
    <Card className="expenses">
      <FilterExpenses prop={prp} onFilter={filterYearHandler} />
      {filterList.map((v) => (
        <ExpenseItem
          key={v.id}
          date={v.date}
          title={v.title}
          ammount={v.amount}
        />
      ))}
    </Card>
  );
};

export default Expanses;
