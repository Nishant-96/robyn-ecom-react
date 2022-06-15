import React from "react";
import "./navbar.css";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import { useAuth } from "../../context/auth-context";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";

export function Navbar() {
  const { state, dispatch } = useFilter();
  const { token, logOutHandler } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function searchHandler(event) {
    if (pathname !== "/product-listing") {
      navigate("/product-listing");
    }
    if (event.key === "Enter" || event.key === "Backspace") {
      dispatch({
        type: "SEARCH_PRODUCT",
        payload: { value: event.target.value },
      });
    }
  }

  function signClickHandler() {
    if (token) {
      logOutHandler();
    } else {
      navigate("/login");
    }
  }

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
            value={state.searchInput}
            onChange={(event) =>
              dispatch({
                type: "SET_SEARCH_INPUT",
                payload: { value: event.target.value },
              })
            }
            onKeyDown={(event) => searchHandler(event)}
          />

          <button
            className="btn btn-float navigation-button"
            onClick={() => signClickHandler()}
          >
            {token ? <LogoutIcon /> : <LoginIcon />}
          </button>

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
