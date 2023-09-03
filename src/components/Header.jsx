import React, { useContext } from "react";
import HeaderLogo from "@mui/icons-material/ChangeHistory";
import Love from "@mui/icons-material/FavoriteBorderOutlined";
import Shop from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import Account from "./Account";
import { Arrays } from "./Context/Arrays";

export default function Header() {
  const { wishlist } = useContext(Arrays);
  const { cart } = useContext(Arrays);
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
          {wishlist.length ? (
            <span className="wishlist-length">{wishlist.length}</span>
          ) : null}
        </Link>
        <Link className="icon-link" to="/tip-top-store/cart">
          <Shop />
          {cart.length ? (
            <span className="cart-length">{cart.length}</span>
          ) : null}
        </Link>

        <Account />
      </div>
    </div>
  );
}
