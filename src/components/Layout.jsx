import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Collections from "./Collections";
import EachItem from "./EachItem";
import Wishlist from "./Wishlist";
import Bag from "./Bag";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { LoginContext } from "./Context/LoginContext";
import { Arrays } from "./Context/Arrays";

export default function Layout() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const wishlistSize = wishlist.length;
  const cartSize = cart.length;
  const value = {
    setLogin,
    setPassword,
    setName,
    setStatus,
    name,
    login,
    password,
    status,
    wishlistSize,
    cartSize,
  };

  const addToWishlist = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    }
  };
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((id) => id !== productId)
    );
  };
  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((id) => id !== productId));
  };
  return (
    <div>
      <LoginContext.Provider value={value}>
        <Arrays.Provider
          value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            cart,
            addToCart,
            removeFromCart,
          }}
        >
          <Header />
          <Routes>
            <Route path="/tip-top-store" element={<Main />} />
            <Route
              path="/tip-top-store/collections"
              element={<Collections />}
            />
            <Route
              path="/tip-top-store/collections/:productId"
              element={<EachItem />}
            />
            <Route path="/tip-top-store/wishlist" element={<Wishlist />} />
            <Route path="/tip-top-store/cart" element={<Bag />} />
            <Route path="/tip-top-store/signup" element={<SignUp />} />
            <Route path="/tip-top-store/signin" element={<SignIn />} />
          </Routes>
        </Arrays.Provider>
      </LoginContext.Provider>
    </div>
  );
}
