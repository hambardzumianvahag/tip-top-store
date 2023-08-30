import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes, useParams } from "react-router-dom";
import Collections from "./Collections";
import EachItem from "./EachItem";

export default function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:productId" element={<EachItem />} />
      </Routes>
    </div>
  );
}
