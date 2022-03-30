
import React from "react";
import ProductCard from "./components/product-card";

import "./product-listing.css";
export function ProductListing() {
  return (
    <div className="productlisting-body">
      <aside className="productlisting-body-sidenav">
        <div className="productlisting-body-sidenav-header">
          <h3>Filter</h3>
          <a href="/">Clear Filter</a>
        </div>
        <div className="productlisting-body-sidenav-price">
          <h4>Price</h4>
          <div>
            <p>100</p>
            <p>5000</p>
          </div>
          <input
            type="range"
            className="slider slider-primary slider-circle rr-slider"
            min="200"
            max="5000"
          />
        </div>
        <div className="productlisting-body-sidenav-categories">
          <h4>Categories</h4>
          <label>
            <input type="Checkbox" name="categories" />
            Superhero
          </label>
          <label>
            <input type="Checkbox" name="categories" />
            Science Fiction
          </label>
          <label>
            <input type="Checkbox" name="categories" />
            Humor
          </label>
          <label>
            <input type="Checkbox" name="categories" />
            Manga
          </label>
          <label>
            <input type="Checkbox" name="categories" />
            Horror
          </label>
        </div>
        <div className="productlisting-body-sidenav-sort">
          <h4>Sort By</h4>
          <label>
            <input type="radio" name="sort" />
            Price - Low To High
          </label>
          <label>
            <input type="radio" name="sort" />
            Price - High to Low
          </label>
        </div>
        <div className="productlisting-body-sidenav-rating">
          <h4>Rating</h4>
          <label>
            <input type="radio" name="rating" />4 stars and above
          </label>
          <label>
            <input type="radio" name="rating" />3 stars and above
          </label>
          <label>
            <input type="radio" name="rating" />2 stars and above
          </label>
          <label>
            <input type="radio" name="rating" />1 stars and above
          </label>
        </div>
      </aside>
      <div className="productlisting-body-content">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
        <div className="product-card"></div>
      </div>
    </div>
  );
}
