import React from "react";
import "./category-card.css";

import { Link } from "react-router-dom";

function CategoryCard({ category: { _id, imgUrl, categoryName } }) {
  return (
    <Link to="/product-listing">
      <div className="home-category-card">
        <img className="image-responsive" alt="category" src={imgUrl} />
        <div className="category-card-text">
          <h3 className="color-white">{categoryName}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
