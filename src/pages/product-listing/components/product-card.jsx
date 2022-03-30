import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";

import "./product-card.css";
function ProductCard() {
  return (
    <div className="product-card">
      <div className="card product-card-wrapper">
        <div>
          <img
            className="image-responsive"
            src="https://raw.githubusercontent.com/Nishant-96/Robyn-Reads/dev/Images-Ecom/product%20Image.jpg"
            alt="product"
          />
        </div>
        <div className="product-card-wrapper-details">
          <FavoriteIcon className="product-card-like-button" />
          <h4>Product Name</h4>
          <p>Author</p>
          <div className="product-card-price">
            <span>Rs 700</span>
            <p>Rs 500</p>
            <span>50% off</span>
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
