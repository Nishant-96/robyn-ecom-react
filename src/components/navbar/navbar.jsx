import React from "react";
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";

import LoginIcon from "@mui/icons-material/Login";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
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

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "navigation-active" : undefined
            }
          >
            <button className="btn btn-float navigation-button">
              <LoginIcon />
            </button>
          </NavLink>

          <NavLink
            to="/product-listing"
            className={({ isActive }) =>
              isActive ? "navigation-active" : undefined
            }
          >
            <button className="btn btn-float navigation-button">
              <InventoryIcon />
            </button>
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "navigation-active" : undefined
            }
          >
            <button className="btn btn-float navigation-button">
              <FavoriteIcon />
            </button>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "navigation-active" : undefined
            }
          >
            <button className="btn btn-float navigation-button">
              <ShoppingCartIcon />
            </button>
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
