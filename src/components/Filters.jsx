import React from "react";
import data from "../data.json";
export default function Filters() {
  const brands = new Set();
  const categories = new Set();
  for (let item of data.clothes) {
    brands.add(item.brand);
    categories.add(item.category);
  }
  return (
    <div className="filters">
      <p>Filters</p>
      <p>Brand</p>
      <div className="parent-brand">
        {Array.from(brands).map((item) => {
          return (
            <div key={item}>
              <label className="label">
                <input type="checkbox" />
                <span>{item}</span> <br />
              </label>
            </div>
          );
        })}
      </div>
      <p>Category</p>
      <div className="parent-category">
        {Array.from(categories).map((item) => {
          return (
            <div key={item}>
              <label className="label">
                <input type="checkbox" />
                <span>{item}</span> <br />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
