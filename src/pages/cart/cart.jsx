import React from "react";

import "./cart.css";
import CartCard from "./components/cart-card";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import { clearCartItemService } from "../../utils/services";
import { useAuth } from "../../context/auth-context";
export function Cart() {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();

  const cartListArray = [...state.cartItems];

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
                return (acc = acc + curr.qty * curr.newprice);
              }, 0)}`}
            </div>
            <button className="btn btn-primary product-card-button">
              Proceed To Checkout
            </button>
            <button
              className="btn btn-outlined product-card-outlined-btn "
              onClick={() =>
                clearCartItemService(cartListArray, token, dispatch)
              }
            >
              Clear Your Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
