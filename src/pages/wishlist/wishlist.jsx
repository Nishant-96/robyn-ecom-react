import React from "react";

import ProductCard from "../product-listing/components/product-card";
import "./wishlist.css";
import { Link } from "react-router-dom";
function Wishlist() {
  //this decide which to render
  const flag = true;

  if (!flag) {
    return (
      <div className="wishlist-body">
        <div className="wishlist-body-empty">
          <h1>Your Wishlist is Empty</h1>
          <img
            className="image-responsive wishlist-empty-img"
            alt="empty wishlist"
            src="https://c.tenor.com/jSNrxkgDrPUAAAAC/shopping-minions.gif"
          />
          <Link to="/product-listing">
            <button className="btn btn-primary wishlist-btn-empty">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="wishlist-body">
        <h2>My Wishlist (items)</h2>
        <div className="wishlist-body-wrapper">
          <ProductCard />
          {/* Dummy cards */}
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
          <div className="product-card"></div>
        </div>
      </div>
    );
  }
}

export default Wishlist;
