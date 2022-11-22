import "./Chart.css";
import ChartBar from "./ChartBar.jsx";

const Chart = function (prp) {
  const dataVals = prp.dataArr.map((i) => i.value);
  const totalMax = Math.max(...dataVals);

  const content = prp.dataArr.map((v) => (
    <ChartBar
      key={v.label}
      value={v.value}
      maxValue={totalMax}
      label={v.label}
    />
  ));

  return <div className="chart">{content}</div>;
};

export default Chart;
