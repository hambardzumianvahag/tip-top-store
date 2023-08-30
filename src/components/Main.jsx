import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="Main">
      <h1>Wear Better, look better</h1>
      <p>Don't you just love being in apparel?</p>
      <Link to="/tip-top-store/collections">
        <Button variant="contained" style={{ backgroundColor: "#8124e1" }}>
          Shop Now
        </Button>
      </Link>
    </div>
  );
}
