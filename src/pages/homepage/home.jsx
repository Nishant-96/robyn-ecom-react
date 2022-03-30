import React from "react";
import CategoryCard from "./components/category-card";

import "./home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-body">
      <div className="home-body-background-container">
        <img
          className="image-responsive home-landing-image"
          alt="landing hero"
          src="Images/1.png"
        />

        <div className="home-landing-title">
          <h1>ROBYN READS</h1>
          <h3>Explore the World of Comics Here.</h3>
          <Link to="/product-listing">
            <button className="btn btn-primary home-landing-title-btn">
              Explore Now
            </button>
          </Link>
        </div>
      </div>

      <div className="home-body-categories">
        <h1>Featured Categories</h1>
        <div>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}


