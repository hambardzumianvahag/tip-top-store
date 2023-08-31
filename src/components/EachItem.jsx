import React from "react";
import { Link,  useParams } from "react-router-dom";
import data from "../data.json";

export default function EachItem() {
  const { productId } = useParams();
  const product = data.clothes.find((item) => item.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          <Link
            to="/tip-top-store/collections"
            style={{ textDecoration: "none" }}
          >
            <span>/Collections</span>
          </Link>
          /{product.name}
        </p>
      </div>
      <div className="each-Item" key={product.id}>
        <img src={product.imageURL} alt="" />
        <div className="item-information">
          <p>{product.brand}</p>
          <span>{product.name}</span>
          <p>{product.category}</p>
          <p>Rs. {product.amount}</p>
          <button className="wish">Wishlist</button>
          <button className="cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}