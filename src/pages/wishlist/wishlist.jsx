import React from "react";

import ProductCard from "../product-listing/components/product-card";
import "./wishlist.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
export function Wishlist() {
  const { state } = useFilter();

  const wishlistArray = state.wishlistItems.filter((curr) => curr.inWishlist);

  if (wishlistArray.length === 0) {
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
        <h2>My Wishlist</h2>
        <div className="wishlist-body-wrapper">
          {wishlistArray.map((currEl) => (
            <ProductCard key={currEl._id} product={currEl} />
          ))}
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