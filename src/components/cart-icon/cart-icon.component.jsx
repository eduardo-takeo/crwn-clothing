import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { toggleModal } from "redux/ducks/cart";

function CartIcon() {
  const dispatch = useDispatch();
  const { isVisible, items } = useSelector((state) => state.cart);

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch(toggleModal(!isVisible))}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{items.length}</span>
    </div>
  );
}

export default CartIcon;
