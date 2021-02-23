import React from "react";

import "./checkout-item.styles.scss";

import DeleteIcon from "../checkout-delete-icon/checkout-delete-icon.component";

export default function CheckoutItem({
  item: { imageUrl, name, price, quantity },
}) {
  function deleteItem() {
    // TODO: Implement delete action on cart redux
    return;
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button">
        <DeleteIcon onClick={deleteItem} />
      </span>
    </div>
  );
}
