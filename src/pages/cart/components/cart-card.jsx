import React from "react";

import "./cart-card.css";
function CartCard() {
  return (
    <div className="cart-card">
      <div class="card-horizontal card-shadow cart-card-wrapper">
        <div>
          <img
            className="image-responsive cart-card-img"
            src="https://raw.githubusercontent.com/Nishant-96/Robyn-Reads/dev/Images-Ecom/product%20Image.jpg"
            alt="product"
            s
          />
        </div>
        <div className="cart-card-description">
          <h3>ROBYN NAME</h3>
          <div>Category</div>
          <div class="product-card-price">
            <span>Rs 700</span>
            <p>Rs 500</p>
            <span>50% off</span>
          </div>
          <div className="cart-card-desc-counter">
            <button className="btn btn-primary product-card-button">-</button>
            <p>10</p>
            <button className="btn btn-primary product-card-button">+</button>
          </div>
          <button className="btn btn-primary product-card-button">
            Remove From Cart
          </button>
          <button className="btn btn-outlined product-card-outlined-btn ">
            Move To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
