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

export default function Layout() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const value = {
    setLogin,
    setPassword,
    setName,
    setStatus,
    name,
    login,
    password,
    status,
  };

  return (
    <div>
      <Header />
      <LoginContext.Provider value={value}>
        <Routes>
          <Route path="/tip-top-store" element={<Main />} />
          <Route path="/tip-top-store/collections" element={<Collections />} />
          <Route
            path="/tip-top-store/collections/:productId"
            element={<EachItem />}
          />
          <Route path="/tip-top-store/wishlist" element={<Wishlist />} />
          <Route path="/tip-top-store/cart" element={<Bag />} />
          <Route path="/tip-top-store/signup" element={<SignUp />} />
          <Route path="/tip-top-store/signin" element={<SignIn />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}
