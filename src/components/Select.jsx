import React, { useContext } from "react";
import { Filtration } from "./Context/Filtration";

export default function Select() {
  const { selectedSort, onSortChange } = useContext(Filtration);

  const handleSortChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="Sort">
      <select className="sort" value={selectedSort} onChange={handleSortChange}>
        <option value="default">Default</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
      </select>
    </div>
  );
}
