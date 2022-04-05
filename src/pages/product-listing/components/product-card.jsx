import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import "./product-card.css";
function ProductCard({ product: productProps }) {
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
          <FavoriteIcon className="product-card-like-button" />
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
        <button className="btn btn-primary product-card-button">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
export default ProductCard;
