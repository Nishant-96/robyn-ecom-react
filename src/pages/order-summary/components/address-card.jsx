import React from "react";
import "../order-summary.css";
function AddressCard({ addressDetail }) {
  return (
    <label className="address-card">
      <input type="radio" />
      <p>
        <b>{`${addressDetail.name}:`} </b>
        {`${addressDetail.street}, ${addressDetail.city}, ${addressDetail.state}-${addressDetail.pincode}, Contact: ${addressDetail.contact}`}
      </p>
    </label>
  );
}

export default AddressCard;
