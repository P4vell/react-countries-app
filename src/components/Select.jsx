const Select = ({ filterCountries }) => {
  return (
    <select
      className="bg-secondary text-primary w-44 h-14 rounded-div font-semibold text-sm px-4 outline-none"
      onChange={(e) => filterCountries(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Select;
