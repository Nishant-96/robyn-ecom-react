import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div className="navigation">
      <header className="navigation-header">
        <div className="navigation-header-left">
          <Link to="/">
            <img
              className="navigation-logo"
              alt="robyn logo"
              src="/Images/rr-logo.png"
            />
          </Link>
        </div>

        <nav className="navigation-header-right">
          <input
            className="navigation-search"
            type="search"
            placeholder="Search"
          />

          <Link to="/login">
            <button className="btn btn-float navigation-button">
              <LoginIcon />
            </button>
          </Link>

          <Link to="/wishlist">
            <button className="btn btn-float navigation-button">
              <FavoriteIcon />
            </button>
          </Link>

          <Link to="/cart">
            <button className="btn btn-float navigation-button">
              <ShoppingCartIcon />
            </button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
