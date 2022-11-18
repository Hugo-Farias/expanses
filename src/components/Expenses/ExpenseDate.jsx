import "./ExpenseDate.css";

const ExpenseDate = function (prp) {
  const dateLocale = "en-US";
  const month = prp.date.toLocaleString(dateLocale, { month: "long" });
  const year = prp.date.getFullYear();
  const day = prp.date.toLocaleString(dateLocale, { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
