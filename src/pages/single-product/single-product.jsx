
import React from "react";
import { useParams } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import "./single-product.css";
export function Singleproduct() {
  const { state } = useFilter();
  const { productId } = useParams();
  const { dispatch } = useFilter();
  const [product] = state.defaultItems.filter((curr) => curr._id === productId);

  return (
    <div className="sp-body">
      <div className="sp-wrapper">
        <div>
          <img
            className="image-responsive sp-image"
            alt="product"
            src={product.imgUrl}
          />
        </div>
        <div className="sp-content">
          <h3>{product.name}</h3>
          <h4>{product.author}</h4>
          <div className="sp-content-price">
            <span>{product.newprice}</span>
            <p>{product.originalPrice}</p>
            <span>{`${Math.round(
              ((product.originalPrice - product.newprice) /
                product.originalPrice) *
                100
            )}%`}</span>
          </div>
          <div className="sp-content-desc">{product.description}</div>
          <div className="sp-content-btn">
            <button
              className="btn btn-primary product-card-button sp-btn"
              onClick={() => {
                return dispatch({
                  type: "ADD_TO_CART",
                  payload: { id: product._id },
                });
              }}
            >
              Add To Cart
            </button>
            <button
              className="btn btn-outlined product-card-outlined-btn "
              onClick={() => {
                return dispatch({
                  type: "MOVE_TO_WISHLIST",
                  payload: { id: product._id },
                });
              }}
            >
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
