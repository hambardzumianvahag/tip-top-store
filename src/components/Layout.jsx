import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import Collections from "./Collections";
import EachItem from "./EachItem";

export default function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/tip-top-store" element={<Main />} />
        <Route path="/tip-top-store/collections" element={<Collections />} />
        <Route path="/tip-top-store/collections/:productId" element={<EachItem />} />
      </Routes>
    </div>
  );
}
