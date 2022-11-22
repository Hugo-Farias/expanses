import "./FilterExpenses.css";

const FilterExpenses = function (prp) {
  const datesList = [];

  const selectFilterHandler = function (e) {
    prp.onFilter(e.target.value);
  };

  // Add Dates to filter list if not
  prp.prop.items
    .map((v) => v.date.getFullYear())
    .forEach((i) => {
      const val = i.toString();
      if (!datesList.includes(val)) datesList.push(val);
    });

  // Order Dates list Aphabetically
  datesList.sort(function (a, b) {
    return a === b ? 0 : a < b ? -1 : 1;
  });

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select name="Year" id="year" onChange={selectFilterHandler}>
          <option value="">Any</option>
          {datesList.map((v, i) => (
            <option key={i} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterExpenses;
