import React from "react";
import { useFilter } from "../../../context/filter-context";
import {
  deleteFromWishListService,
  postAddToCartService,
  postAddToWishListService,
} from "../../../utils/services";
import { useAuth } from "../../../context/auth-context";
import { Link, useLocation, useNavigate } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import "./product-card.css";

function ProductCard({ product: productProps }) {
  const { state, dispatch } = useFilter();
  const { token } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isInWishlist = state.wishlistItems.some(
    (curr) => curr._id === productProps._id
  );
  const isInCart = state.cartItems.some(
    (curr) => curr._id === productProps._id
  );

  const cartClickHandler = (event) => {
    if (token) {
      if (event.target.innerText === "Add To Cart") {
        postAddToCartService(token, productProps, dispatch);
      } else if (event.target.innerText === "Move To Cart") {
        postAddToCartService(token, productProps, dispatch);
        deleteFromWishListService(token, productProps._id, dispatch);
      } else {
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="product-card">
      <div className="card product-card-wrapper">
        <Link to={`/single-product/${productProps._id}`}>
          <img
            className="image-responsive"
            src={productProps.imgUrl}
            alt="product"
          />
        </Link>
        <div className="product-card-wrapper-details">
          {isInWishlist ? (
            <FavoriteIcon
              className={"product-card-like-button"}
              onClick={() =>
                token
                  ? deleteFromWishListService(token, productProps._id, dispatch)
                  : navigate("/login")
              }
            />
          ) : (
            <FavoriteBorderIcon
              className={"product-card-like-button"}
              onClick={() => {
                token
                  ? postAddToWishListService(token, productProps, dispatch)
                  : navigate("/login");
              }}
            />
          )}
          <h4>{productProps.name}</h4>
          <div className="product-card-header">
            <p>{productProps.author}</p>
            <div className="product-card-header-rating">
              <p>{productProps.rating}</p>
              <StarIcon />
            </div>
          </div>
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
        </div>
        <button
          className="btn btn-primary product-card-button"
          onClick={(event) => {
            cartClickHandler(event);
          }}
        >
          {pathname === "/wishlist"
            ? isInCart
              ? "Go To Cart"
              : "Move To Cart"
            : isInCart
            ? "Go To Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
