import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFilter } from "../../../context/filter-context";
import { useAuth } from "../../../context/auth-context";
import { postAddAddressService } from "../../../utils/services";

import CloseIcon from "@mui/icons-material/Close";
import "../order-summary.css";

function AddressModal({ show, setShow }) {
  const { dispatch } = useFilter();
  const { token } = useAuth();
  const [addressForm, setAddressForm] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    contact: "",
  });

  const saveClickHandler = () => {
    try {
      if (
        addressForm.name === "" ||
        addressForm.street === "" ||
        addressForm.state === "" ||
        addressForm.city === "" ||
        addressForm.pincode === "" ||
        addressForm.contact === ""
      ) {
        throw new Error("All Fields are Mandatory !");
      } else {
        postAddAddressService(token, addressForm, dispatch);
        setAddressForm({
          name: "",
          street: "",
          city: "",
          state: "",
          pincode: "",
          contact: "",
        });
        setShow((prev) => ({ ...prev, addressModal: false }));
      }
    } catch (error) {
      console.error(error);
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  if (!show.addressModal) return null;
  return (
    <div
      className="modal-container"
      onClick={() => {
        setShow((prev) => ({ ...prev, addressModal: false }));
        setAddressForm({
          name: "",
          street: "",
          city: "",
          state: "",
          pincode: "",
          contact: "",
        });
      }}
    >
      <div
        className="modal modal-wrapper"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h4 className="">Add New Address</h4>
          <CloseIcon
            onClick={() => {
              setShow((prev) => ({ ...prev, addressModal: false }));
              setAddressForm({
                name: "",
                street: "",
                city: "",
                state: "",
                pincode: "",
                contact: "",
              });
            }}
          />
        </div>
        <div className="modal-body">
          <input
            className="modal-input-field"
            type="text"
            id="name"
            name="name"
            placeholder="Name *"
            value={addressForm.name}
            onChange={(event) =>
              setAddressForm((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <input
            className="modal-input-field"
            type="text"
            id="street"
            name="street"
            placeholder="House No., Street *"
            value={addressForm.street}
            onChange={(event) =>
              setAddressForm((prev) => ({
                ...prev,
                street: event.target.value,
              }))
            }
          />
          <input
            className="modal-input-field"
            type="text"
            id="city"
            name="city"
            placeholder="City *"
            value={addressForm.city}
            onChange={(event) =>
              setAddressForm((prev) => ({ ...prev, city: event.target.value }))
            }
          />
          <input
            className="modal-input-field"
            type="text"
            id="state"
            name="state"
            placeholder="State *"
            value={addressForm.state}
            onChange={(event) =>
              setAddressForm((prev) => ({ ...prev, state: event.target.value }))
            }
          />
          <input
            className="modal-input-field"
            type="number"
            id="pincode"
            name="pincode"
            placeholder="Pin code *"
            value={addressForm.pincode}
            onChange={(event) =>
              setAddressForm((prev) => ({
                ...prev,
                pincode: event.target.value,
              }))
            }
          />
          <input
            className="modal-input-field"
            type="number"
            id="contact"
            name="contact"
            placeholder="Contact No. *"
            value={addressForm.contact}
            onChange={(event) =>
              setAddressForm((prev) => ({
                ...prev,
                contact: event.target.value,
              }))
            }
          />
        </div>

        <button
          className="btn btn-primary auth-button"
          onClick={() => saveClickHandler()}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddressModal;
