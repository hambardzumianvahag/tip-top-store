import React, { useContext } from "react";
import data from "../data.json";
import { Filtration } from "./Context/Filtration";

export default function Filters() {
  const { selectedFilters, onFilterChange } = useContext(Filtration);
  const brands = new Set();
  const categories = new Set();

  for (let item of data.clothes) {
    brands.add(item.brand);
    categories.add(item.category);
  }

  const handleBrandChange = (brand) => {
    onFilterChange("brands", brand);
  };

  const handleCategoryChange = (category) => {
    onFilterChange("categories", category);
  };

  return (
    <div className="filters">
      <p>Filters</p>
      <p>Brand</p>
      <div className="parent-brand">
        {Array.from(brands).map((brand) => (
          <div key={brand}>
            <label className="label">
              <input
                type="checkbox"
                checked={selectedFilters.brands.has(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span> <br />
            </label>
          </div>
        ))}
      </div>
      <p>Category</p>
      <div className="parent-category">
        {Array.from(categories).map((category) => (
          <div key={category}>
            <label className="label">
              <input
                type="checkbox"
                checked={selectedFilters.categories.has(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span> <br />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
