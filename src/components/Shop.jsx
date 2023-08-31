import React, { useContext } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { Filtration } from "./Context/Filtration";

export default function Shop() {
  const { selectedFilters, selectedSort } = useContext(Filtration);

  let filteredAndSortedData = data.clothes.filter((item) => {
    if (
      selectedFilters.brands.size === 0 ||
      selectedFilters.brands.has(item.brand)
    ) {
      if (
        selectedFilters.categories.size === 0 ||
        selectedFilters.categories.has(item.category)
      ) {
        return true;
      }
    }
    return false;
  });

  if (selectedSort === "high") {
    filteredAndSortedData.sort((a, b) => b.amount - a.amount);
  } else if (selectedSort === "low") {
    filteredAndSortedData.sort((a, b) => a.amount - b.amount);
  }

  return (
    <div className="each-div">
      {filteredAndSortedData.map((item) => (
        <div key={item.id} className="each-item">
          <Link
            to={`/tip-top-store/collections/${item.id}`}
            className="item-link"
          >
            <img src={item.imageURL} alt="" />
            <p>{item.brand}</p>
            <span>{item.name}</span>
            <p>Rs. {item.amount}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
