import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import "./product-card.css";
import { useFilter } from "../../../context/filter-context";
function ProductCard({ product: productProps }) {
  const { dispatch } = useFilter();

  return (
    <div className="product-card">
      <div className="card product-card-wrapper">
        <div>
          <img
            className="image-responsive"
            src={productProps.imgUrl}
            alt="product"
          />
        </div>
        <div className="product-card-wrapper-details">
          <FavoriteIcon
            className={
              productProps.inWishlist
                ? "product-card-like-button product-card-liked"
                : "product-card-like-button"
            }
            // className={productProps.inWishlist ? "product-card-liked" : null}
            onClick={() => {
              dispatch({
                type: "MOVE_TO_WISHLIST",
                payload: { id: productProps._id },
              });
            }}
          />
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
          onClick={() => {
            return dispatch({
              type: "ADD_TO_CART",
              payload: { id: productProps._id },
            });
          }}
        >
          {productProps.inWishlist ? "Move To Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
