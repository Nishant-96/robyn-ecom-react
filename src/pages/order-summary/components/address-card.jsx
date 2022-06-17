import React from "react";
import "../order-summary.css";
function AddressCard({ addressDetail, addressSelect, setAddressSelect }) {
  return (
    <label className="address-card">
      <input
        type="radio"
        value={addressDetail._id}
        checked={addressSelect.addressSelected === addressDetail._id}
        onChange={() =>
          setAddressSelect((prev) => ({
            ...prev,
            addressSelected: addressDetail._id,
          }))
        }
      />
      <p>
        <b>{`${addressDetail.name}:`} </b>
        {`${addressDetail.street}, ${addressDetail.city}, ${addressDetail.state}-${addressDetail.pincode}, Contact: ${addressDetail.contact}`}
      </p>
    </label>
  );
}

export default AddressCard;
