import "./Expenses.css";
import Card from "../UI/Card";
import FilterExpenses from "./FilterExpenses.jsx";
import ExpensesList from "./ExpensesList.jsx";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart.jsx";

const Expanses = function (prp) {
  const [filterYear, setFilterYear] = useState("");

  const filterYearHandler = (value) => setFilterYear(value);

  const filterList = !filterYear
    ? prp.items
    : prp.items.filter((v) => v.date.getFullYear().toString() === filterYear);

  return (
    <Card className="expenses">
      <FilterExpenses prop={prp} onFilter={filterYearHandler} />
      <ExpensesChart data={filterList} />
      <ExpensesList items={filterList} />
    </Card>
  );
};

export default Expanses;
