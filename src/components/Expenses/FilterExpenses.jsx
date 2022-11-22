import "./FilterExpenses.css";

const FilterExpenses = function (prp) {
  const datesList = [];

  const selectFilterHandler = function (e) {
    prp.onFilter(e.target.value);
  };

  prp.prop.items
    .map((v) => v.date.getFullYear())
    .forEach((i) => {
      const val = i.toString();
      if (!datesList.includes(val)) datesList.push(val);
    });

  return (
    <div className="filter-div">
      <label className="filter-label">Filter by Year</label>
      <select name="Year" id="year" onChange={selectFilterHandler}>
        <option value="any">Any</option>
        {datesList.map((v, i) => (
          <option key={i} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterExpenses;
