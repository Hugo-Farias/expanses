import "./ChartBar.css";

const ChartBar = function (prp) {
  let barFillHeight = "0%";

  if (prp.maxValue) {
    barFillHeight = Math.round((prp.value / prp.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{prp.label}</div>
    </div>
  );
};

export default ChartBar;
