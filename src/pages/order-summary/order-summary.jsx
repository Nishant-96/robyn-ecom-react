import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useFilter } from "../../context/filter-context";
import { displayRazorpay } from "../../utils/razorpay";
import { clearCartItemService, getAddressList } from "../../utils/services";

import AddressCard from "./components/address-card";
import AddressModal from "./components/address-form-modal";
import "./order-summary.css";
export function OrderSummary() {
  const [modalState, setModalState] = useState({
    addressModal: false,
    addressSelected: null,
  });
  const { state, dispatch } = useFilter();
  const { token } = useAuth();
  const navigate = useNavigate();
  const cartListArray = [...state.cartItems];
  const addressListArr = [...state.addressItems];
  const totalPrice = cartListArray.reduce((acc, curr) => {
    return (acc = acc + curr.qty * curr.newprice);
  }, 150);

  const successPayment = () => {
    clearCartItemService(cartListArray, token, dispatch);
    navigate("/product-listing");
    toast.success(`Success, Order Placed succefully 🎉`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    getAddressList(token, dispatch);
  }, [state.addressListApiFlag, token, dispatch]);

  return (
    <div className="order-body">
      <div className="order-wrapper">
        <h2>Order Summary</h2>
        <div className="order-wrapper-content">
          <div className="order-wrapper-content-right">
            <h3>Select Your Address</h3>
            <div className="divider"></div>
            <div className="address-card-wrapper">
              {addressListArr.map((curr) => (
                <AddressCard
                  addressDetail={curr}
                  key={curr._id}
                  addressSelect={modalState}
                  setAddressSelect={setModalState}
                />
              ))}
            </div>
            <button
              className="btn btn-primary auth-button"
              onClick={() =>
                setModalState((prev) => ({ ...prev, addressModal: true }))
              }
            >
              Add New Address
            </button>
          </div>

          <div className="order-wrapper-content-right">
            <h3>Price Details</h3>
            <div className="divider"></div>
            <div className="order-content-price-section">
              <div>Actual Price ({`${cartListArray.length} Items`})</div>
              <div>
                &#8377;
                {` ${cartListArray.reduce((acc, curr) => {
                  return (acc = acc + curr.qty * curr.originalPrice);
                }, 0)}
                `}
              </div>
            </div>
            <div className="order-content-price-section">
              <div>Discount</div>
              <div>
                - &#8377;
                {`${cartListArray.reduce((acc, curr) => {
                  return (acc =
                    acc + curr.qty * (curr.originalPrice - curr.newprice));
                }, 0)}
                `}
              </div>
            </div>
            <div className="order-content-price-section">
              <div>Delivery Charges</div>
              <div>&#8377; 150</div>
            </div>
            <div className="divider"></div>
            <div className="order-content-price-section">
              <div>Total Price</div>
              <div>&#8377;{totalPrice}</div>
            </div>
            <button
              className={`btn btn-primary auth-button ${
                !modalState.addressSelected && "disabled"
              }`}
              onClick={() =>
                modalState.addressSelected &&
                displayRazorpay(totalPrice, successPayment)
              }
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <AddressModal show={modalState} setShow={setModalState} />
    </div>
  );
}
