import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";

import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  SignUp,
  Singleproduct,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, RequireAuth } from "./components";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route
          path="/single-product/:productId"
          element={
            <RequireAuth>
              <Singleproduct />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
