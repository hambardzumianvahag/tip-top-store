import React from 'react'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  return (
	<div>
     <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Wishlist
        </p>
      </div>
  </div>
  )
}
