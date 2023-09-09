import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Arrays } from "./Context/Arrays";
import data from "../data.json";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart, cart } = useContext(Arrays);
  const findProductById = (productId) => {
    return data.clothes.find((product) => product.id === productId);
  };
  const addToCartAndRemove = (e, productId) => {
    e.preventDefault();
    if (!cart.includes(productId)) {
      addToCart(productId);
      removeFromWishlist(productId);
    } else if (cart.includes(productId)) {
      removeFromWishlist(productId);
    }
  };
  const handleRemoveFromWishlist = (e, productId) => {
    e.preventDefault();
    removeFromWishlist(productId);
  };

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
          /Wishlist
        </p>
      </div>

      <div className="wishlist-items-parent">
        <h3>
          Wishlist <span>({wishlist.length} items)</span>
        </h3>
        <div className="wishlist-items">
          {wishlist.map((productId) => {
            const product = findProductById(productId);

            if (!product) {
              return <div key={productId}>Product not found</div>;
            }

            return (
              <Link
                key={productId}
                to={`/tip-top-store/collections/${productId}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                <div className="wishlist-item">
                  <span
                    className="x-symbol"
                    onClick={(e) => handleRemoveFromWishlist(e, productId)}
                  >
                    &#10006;
                  </span>
                  <img src={product.imageURL} alt={product.name} />
                  <div className="wishlist-information">
                    <p>{product.brand}</p>
                    <span>{product.name}</span>
                    <p>Rs. {product.amount}</p>
                  </div>
                  <button
                    className="to-cart"
                    onClick={(e) => addToCartAndRemove(e, productId)}
                  >
                    Move to Cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
