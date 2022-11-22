import Chart from "../Chart/Chart.jsx";
import expenses from "./Expenses.jsx";

const ExpensesChart = function (prp) {
  const chartData = [
    { label: "jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const i of prp.data) {
    const expenseMonth = i.date.getMonth();

    chartData[expenseMonth].value += i.amount;
  }

  return <Chart dataArr={chartData} />;
};

export default ExpensesChart;
