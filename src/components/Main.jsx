import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  let status = localStorage.getItem("status");
  const linkTo = status
    ? "/tip-top-store/collections"
    : "/tip-top-store/signin";
  return (
    <div className="Main">
      <h1>Wear Better, look better</h1>
      <p>Don't you just love being in apparel?</p>
      <Link to={linkTo}>
        <Button variant="contained" style={{ backgroundColor: "#8124e1" }}>
          Shop Now
        </Button>
      </Link>
    </div>
  );
}
