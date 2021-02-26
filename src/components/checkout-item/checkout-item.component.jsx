import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";
import { deleteItem } from "redux/ducks/cart";

import DeleteIcon from "../checkout-delete-icon/checkout-delete-icon.component";

export default function CheckoutItem({
  item,
  item: { imageUrl, name, price, quantity },
}) {
  const dispatch = useDispatch();

  function removeItem() {
    dispatch(deleteItem(item));
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
        <DeleteIcon onClick={removeItem} />
      </span>
    </div>
  );
}
