import "./App.css";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/homepage/home.jsx";
import Wishlist from "./pages/wishlist/wishlist";
import Cart from "./pages/cart/cart.jsx";
import ProductListing from "./pages/product-listing/product-listing";
import Login from "./pages/authentication/login";
import SignUp from "./pages/authentication/signup";
import Forgot from "./pages/authentication/forgotpass";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
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
