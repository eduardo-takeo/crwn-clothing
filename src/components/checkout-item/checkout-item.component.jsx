import React from "react";
import { useDispatch } from "react-redux";

import "./checkout-item.styles.scss";
import { deleteItem } from "redux/ducks/cart";

import PlusIcon from "components/plus-icon/plus-icon.component";
import DeleteIcon from "components/checkout-delete-icon/checkout-delete-icon.component";
import MinusIcon from "components/minus-icon/minus-icon.component";

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
      <span className="quantity">
        <div className="quantity-container">
          <MinusIcon />
          {quantity}
          <PlusIcon />
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button">
        <DeleteIcon onClick={removeItem} />
      </span>
    </div>
  );
}
