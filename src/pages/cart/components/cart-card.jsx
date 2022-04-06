import React from "react";
import { useFilter } from "../../../context/filter-context";

import "./cart-card.css";
function CartCard({ product: productProps }) {
  const { dispatch } = useFilter();
  return (
    <div className="cart-card">
      <div className="card-horizontal card-shadow cart-card-wrapper">
        <div>
          <img
            className="image-responsive cart-card-img"
            src={productProps.imgUrl}
            alt="product"
            s
          />
        </div>
        <div className="cart-card-description">
          <h3>{productProps.name}</h3>
          <div>{productProps.author}</div>
          <div className="product-card-price">
            <span>{productProps.newprice}</span>
            <p>{productProps.originalPrice}</p>
            <span>
              {`${Math.round(
                ((productProps.originalPrice - productProps.newprice) /
                  productProps.originalPrice) *
                  100
              )}%`}
            </span>
          </div>
          <div className="cart-card-desc-counter">
            <button
              className="btn btn-primary product-card-button"
              onClick={() => {
                return dispatch({
                  type: "CART_QTY_DECREMENTER",
                  payload: { id: productProps._id },
                });
              }}
            >
              -
            </button>
            <p>{productProps.inCartQty}</p>
            <button
              className="btn btn-primary product-card-button"
              onClick={() => {
                return dispatch({
                  type: "CART_QTY_INCREMENTER",
                  payload: { id: productProps._id },
                });
              }}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary product-card-button"
            onClick={() => {
              return dispatch({
                type: "REMOVE_FROM_CART",
                payload: { id: productProps._id },
              });
            }}
          >
            Remove From Cart
          </button>
          <button
            className="btn btn-outlined product-card-outlined-btn "
            onClick={() => {
              return dispatch({
                type: "CART_TO_WISHLIST",
                payload: { id: productProps._id },
              });
            }}
          >
            Move To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
