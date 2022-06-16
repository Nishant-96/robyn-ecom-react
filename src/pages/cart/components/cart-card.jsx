import React from "react";
import { useAuth } from "../../../context/auth-context";
import { useFilter } from "../../../context/filter-context";
import {
  cartItemQtyService,
  deleteFromCartService,
  postAddToWishListService,
} from "../../../utils/services";

import "./cart-card.css";
function CartCard({ product: productProps }) {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();
  const isInWishlist = state.wishlistItems.some(
    (curr) => curr._id === productProps._id
  );
  return (
    <div className="cart-card">
      <div className="card-horizontal card-shadow cart-card-wrapper">
        <div>
          <img
            className="image-responsive cart-card-img"
            src={productProps.imgUrl}
            alt="product"
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
              disabled={productProps.qty > 1 ? false : true}
              onClick={() =>
                cartItemQtyService(
                  token,
                  productProps._id,
                  { type: "decrement" },
                  dispatch
                )
              }
            >
              -
            </button>
            <p>{productProps.qty}</p>
            <button
              className="btn btn-primary product-card-button"
              onClick={() =>
                cartItemQtyService(
                  token,
                  productProps._id,
                  { type: "increment" },
                  dispatch
                )
              }
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary product-card-button"
            onClick={() =>
              deleteFromCartService(token, productProps._id, dispatch)
            }
          >
            Remove From Cart
          </button>
          <button
            className="btn btn-outlined product-card-outlined-btn "
            onClick={() => {
              !isInWishlist &&
                postAddToWishListService(token, productProps, dispatch);
              deleteFromCartService(token, productProps._id, dispatch);
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
