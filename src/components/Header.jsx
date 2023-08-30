import React from "react";
import HeaderLogo from "@mui/icons-material/ChangeHistory";
import Love from "@mui/icons-material/FavoriteBorderOutlined";
import Shop from "@mui/icons-material/ShoppingBagOutlined";
import Account from "@mui/icons-material/AccountCircleOutlined";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <HeaderLogo className="header-logo" />
        <h3>tiptop</h3>
      </div>
      <div className="icons">
        <Love />
        <Shop />
        <Account />
      </div>
    </div>
  );
}
