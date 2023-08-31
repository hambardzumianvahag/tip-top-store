import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function Account() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let status = localStorage.getItem("status");
  const userName = localStorage.getItem("name");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    localStorage.setItem("status", "");
    handleClose();
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          padding: 0,
          background: "none",
          border: "none",
          minWidth: "0",
        }}
        className="account-button"
      >
        {<AccountIcon />}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="account-menu">
            <h4>Welcome</h4>
            {status ? (
              <p>{userName}</p>
            ) : (
              <div>
                <p>To access wishlist or cart</p>
                <Link to="/tip-top-store/signin">
                  <button>Sign In</button>
                </Link>

                <hr />
              </div>
            )}
          </div>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="logo-link" to="/tip-top-store/collections">
            Collections
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="logo-link" to="/tip-top-store/wishlist">
            Wishlist
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className="logo-link" to="/tip-top-store/cart">
            Cart
          </Link>
        </MenuItem>
        {status ? (
          <MenuItem onClick={handleLogOut}>
            <Link className="logo-link" to="/tip-top-store">
              Log Out
            </Link>
          </MenuItem>
        ) : null}
      </Menu>
    </div>
  );
}
