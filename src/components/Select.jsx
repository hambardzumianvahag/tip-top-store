import React from "react";

export default function Select() {
  return (
    <div className="Sort">
      <select className="sort">
        <option value="default">Default</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
      </select>
    </div>
  );
}
