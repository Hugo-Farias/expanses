import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import FilterExpenses from "./FilterExpenses.jsx";
import { useState } from "react";

const Expanses = function (prp) {
  const [filteredList, setFilteredList] = useState(prp.items);

  // const testList = filteredList

  const filteredYearHandler = function (value) {
    if (value === "any") return setFilteredList(prp.items);

    setFilteredList(
      prp.items.filter((i) => i.date.getFullYear().toString() === value)
    );
  };

  return (
    <Card className="expenses">
      <FilterExpenses prop={prp} onFilter={filteredYearHandler} />
      {filteredList.map((v) => (
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
