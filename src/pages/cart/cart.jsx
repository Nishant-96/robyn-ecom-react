import React from "react";

import "./cart.css";
import CartCard from "./components/cart-card";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
export function Cart() {
  const { state, dispatch } = useFilter();

  const cartListArray = state.cartItems.filter((curr) => curr.inCart);

  if (cartListArray.length === 0) {
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
            {cartListArray.map((currEl) => (
              <CartCard product={currEl} key={currEl._id} />
            ))}
          </div>

          <div className="cart-body-wrapper-price">
            <div>
              Sub Total ({`${cartListArray.length} Items`}) :
              {` Rs ${cartListArray.reduce((acc, curr) => {
                return (acc = acc + curr.inCartQty * curr.newprice);
              }, 0)}`}
            </div>
            <button className="btn btn-primary product-card-button">
              Proceed To Checkout
            </button>
            <button className="btn btn-primary product-card-button">
              Share Your Cart
            </button>
            <button
              className="btn btn-outlined product-card-outlined-btn "
              onClick={() => dispatch({ type: "CLEAR_YOUR_CART" })}
            >
              Clear Your Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
