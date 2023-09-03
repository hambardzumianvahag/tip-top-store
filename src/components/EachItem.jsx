import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import { Arrays } from "./Context/Arrays";

export default function EachItem() {
  const { productId } = useParams();
  const product = data.clothes.find((item) => item.id === productId);
  const { addToWishlist, wishlist, removeFromWishlist } = useContext(Arrays);
  const { addToCart, cart, removeFromCart } = useContext(Arrays);

  const [title, setTitle] = useState("Wishlist");
  const [cartTitle, setCartTitle] = useState("Add to Cart");
  useEffect(() => {
    setTitle(wishlist.includes(productId) ? "Wishlisted" : "Wishlist");
  }, [productId, wishlist]);

  useEffect(() => {
    setCartTitle(cart.includes(productId) ? "Added to Cart" : "Add to Cart");
  }, [productId, cart]);

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
          <button
            className="wish"
            onClick={() => {
              if (wishlist.includes(productId)) {
                removeFromWishlist(productId);
                setTitle("Wishlist");
              } else {
                addToWishlist(productId);
                setTitle("Wishlisted");
              }
            }}
          >
            {title}
          </button>
          <button
            className="cart"
            onClick={() => {
              if (cart.includes(productId)) {
                removeFromCart(productId);
                setCartTitle("Add to Cart");
              } else {
                addToCart(productId);
                setCartTitle("Added to Cart");
              }
            }}
          >
            {cartTitle}
          </button>
        </div>
      </div>
    </div>
  );
}
