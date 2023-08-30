import React from "react";
import { Link, useLocation } from "react-router-dom";
import General from "./General";

export default function Collections() {
  const location = useLocation();
  return (
    <div className="collections">
      <div className="location">
        <p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          {location.pathname}
        </p>
      </div>
      <General />
    </div>
  );
}
