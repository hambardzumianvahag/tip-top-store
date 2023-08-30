import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
export default function Shop() {
  return (
    <div className="each-div">
      {data.clothes.map((item) => {
        return (
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
        );
      })}
    </div>
  );
}
