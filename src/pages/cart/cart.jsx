import React from "react";

import "./cart.css";
import CartCard from "./components/cart-card";
import { Link } from "react-router-dom";
function Cart() {
  // This variable triggers which page to render
  const flag = false;

  if (flag) {
    return (
      <div className="cart-body">
        <div className="wishlist-body-empty">
          <h1>Your Cart is Empty</h1>
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
      <div className="cart-body">
        <h2>My Cart</h2>
        <div className="cart-body-wrapper">
          <div className="cart-body-wrapper-cards">
            <CartCard />
            <CartCard />
          </div>

          <div className="cart-body-wrapper-price">
            <div>Sub Total (items): Rs 500</div>
            <button className="btn btn-primary product-card-button">
              Proceed To Checkout
            </button>
            <button className="btn btn-primary product-card-button">
              Share Your Cart
            </button>
            <button className="btn btn-outlined product-card-outlined-btn ">
              Clear Your Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
