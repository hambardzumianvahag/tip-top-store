import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Arrays } from "./Context/Arrays";
import data from "../data.json";

export default function Bag() {
  const { cart } = useContext(Arrays);
  const { removeFromCart } = useContext(Arrays);
  const [totalPrice, setTotalPrice] = useState(0);
  const findProductById = useCallback((productId) => {
    return data.clothes.find((product) => product.id === productId);
  }, []);

  useEffect(() => {
    let sum = 0;
    cart.forEach((productId) => {
      const product = findProductById(productId);
      if (product) {
        sum += Number(product.amount);
      }
    });
    setTotalPrice(Number(sum));
  }, [cart, findProductById]);
  const handleRemoveFromCart = (e, productId) => {
    e.preventDefault();
    removeFromCart(productId);
  };
  return (
    <div>
      <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Cart
        </p>
      </div>
      <div className="cart-items-parent">
        <h3>
          Cart <span>({cart.length} items)</span>
        </h3>
        <div className="cart-items">
          <div>
            {cart.map((productId) => {
              const product = findProductById(productId);

              if (!product) {
                return <div key={productId}>Product not found</div>;
              }

              return (
                <Link
                  to={`/tip-top-store/collections/${productId}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  key={productId}
                >
                  <div className="cart-item">
                    <span
                      className="x-symbol"
                      onClick={(e) => handleRemoveFromCart(e, productId)}
                    >
                      &#10006;
                    </span>
                    <img src={product.imageURL} alt={product.name} />
                    <div className="cart-information">
                      <p>{product.brand}</p>
                      <span>{product.name}</span>
                      <p>Rs. {product.amount}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {totalPrice ? (
            <div className="details">
              <h4>Price Details</h4>
              <p>
                <span>Price</span> <span>Rs. {totalPrice}</span>
              </p>
              <p>
                <span>Shipping</span> <span>FREE</span>
              </p>
              <hr />
              <h3>
                <span>Total Amount</span> <span>Rs. {totalPrice}</span>
              </h3>
              <button>Place Order</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
