import React from "react";
import "./category-card.css";

import { Link } from "react-router-dom";

function CategoryCard() {
  return (
    <Link to="/product-listing">
      <div className="home-category-card">
        <img
          className="image-responsive"
          alt="category"
          src="https://i.annihil.us/u/prod/marvel/i/mg/4/70/61f018d6d9799/portrait_uncanny.jpg"
        />
        <div class="category-card-text">
          <h3 class="color-white">Horror</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
