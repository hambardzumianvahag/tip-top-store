import React from "react";
import HeaderLogo from "@mui/icons-material/ChangeHistory";
import Love from "@mui/icons-material/FavoriteBorderOutlined";
import Shop from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Account from "./Account";

export default function Header() {
  return (
    <div className="header">
      <Link to="/tip-top-store" className="logo-link">
        <div className="logo">
          <HeaderLogo className="header-logo" />
          <h3>tiptop</h3>
        </div>
      </Link>

      <div className="icons">
        <Link className="icon-link" to="/tip-top-store/wishlist">
          <Love />
        </Link>
        <Link className="icon-link" to="/tip-top-store/cart">
          <Shop />
        </Link>

        <Account />
      </div>
    </div>
  );
}
