import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  Home,
  ProductListing,
  Cart,
  Wishlist,
  Login,
  SignUp,
  Forgot,
  Singleproduct,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

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
        <Route path="/single-product/:productId" element={<Singleproduct />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
