import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";
import { addItem, removeItem, clearItemFromCart } from "redux/ducks/cart";

import PlusIcon from "components/plus-icon/plus-icon.component";
import DeleteIcon from "components/checkout-delete-icon/checkout-delete-icon.component";
import MinusIcon from "components/minus-icon/minus-icon.component";

export default function CheckoutItem({
  item,
  item: { imageUrl, name, price, quantity },
}) {
  const dispatch = useDispatch();

  function decreaseQuantity() {
    dispatch(removeItem(item));
  }

  function increaseQuantity() {
    dispatch(addItem(item));
  }

  function clearItem() {
    dispatch(clearItemFromCart(item));
  }

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="quantity-container">
          <MinusIcon onClick={decreaseQuantity} />
          {quantity}
          <PlusIcon onClick={increaseQuantity} />
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button">
        <DeleteIcon onClick={clearItem} />
      </span>
    </div>
  );
}
