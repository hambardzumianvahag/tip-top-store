import React from 'react'
import { Link } from 'react-router-dom'

export default function Bag() {
  return (
	<div>
     <div className="location">
        <p>
          <Link to="/tip-top-store" style={{ textDecoration: "none" }}>
            <span>Home</span>
          </Link>
          /Cart
        </p>
      </div>
  </div>
  )
}
