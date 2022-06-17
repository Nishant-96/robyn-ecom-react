import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useFilter } from "../../context/filter-context";
import {
  deleteFromWishListService,
  postAddToCartService,
  postAddToWishListService,
} from "../../utils/services";
import "./single-product.css";
export function Singleproduct() {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product] = state.defaultItems.filter((curr) => curr._id === productId);

  const inWishlist = state.wishlistItems.some((curr) => curr._id === productId);
  const inCart = state.cartItems.some((curr) => curr._id === productId);

  const wishlistClickHandler = () => {
    if (token) {
      if (!inWishlist) {
        postAddToWishListService(token, product, dispatch);
      } else {
        deleteFromWishListService(token, productId, dispatch);
      }
    } else {
      navigate("/login");
    }
  };

  const cartClickHandler = () => {
    if (token) {
      if (!inCart) {
        postAddToCartService(token, product, dispatch);
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="sp-body">
      <div className="sp-wrapper">
        <div>
          <img
            className="image-responsive sp-image"
            alt="product"
            src={product.imgUrl}
          />
        </div>
        <div className="sp-content">
          <h3>{product.name}</h3>
          <h4>{product.author}</h4>
          <div className="sp-content-price">
            <span>{product.newprice}</span>
            <p>{product.originalPrice}</p>
            <span>{`${Math.round(
              ((product.originalPrice - product.newprice) /
                product.originalPrice) *
                100
            )}%`}</span>
          </div>
          <div className="sp-content-desc">{product.description}</div>
          <div className="sp-content-btn">
            <button
              className="btn btn-primary product-card-button sp-btn"
              onClick={() => {
                cartClickHandler();
              }}
            >
              {inCart ? "Go To Cart" : "Add To Cart"}
            </button>
            <button
              className="btn btn-outlined product-card-outlined-btn "
              onClick={() => {
                wishlistClickHandler();
              }}
            >
              {inWishlist ? "Remove From Wishlist" : "Add To Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
