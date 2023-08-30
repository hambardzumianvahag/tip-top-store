import React from "react";
import { Link } from "react-router-dom";
import General from "./General";

export default function Collections() {
  return (
    <div className="collections">
      <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Collections
        </p>
      </div>
      <General />
    </div>
  );
}
