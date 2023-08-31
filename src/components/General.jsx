import { useState } from "react";
import Filters from "./Filters";
import Select from "./Select";
import Shop from "./Shop";
import { Filtration } from "./Context/Filtration";

export default function General() {
  const [selectedFilters, setSelectedFilters] = useState({
    brands: new Set(),
    categories: new Set(),
  });

  const [selectedSort, setSelectedSort] = useState("default");

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].has(filterValue)
        ? new Set(
            [...prevFilters[filterType].values()].filter(
              (v) => v !== filterValue
            )
          )
        : new Set([...prevFilters[filterType], filterValue]),
    }));
  };

  const handleSortChange = (value) => {
    setSelectedSort(value);
  };
  const value = {
    selectedFilters,
    selectedSort,
    onFilterChange: handleFilterChange,
    onSortChange: handleSortChange,
  };
  return (
    <div className="General">
      <Filtration.Provider value={value}>
        <div className="filter">
          <Filters />
        </div>
        <div className="shop">
          <div className="select-div">
            <p>Collections</p>
            <Select />
          </div>
          <Shop />
        </div>
      </Filtration.Provider>
    </div>
  );
}
