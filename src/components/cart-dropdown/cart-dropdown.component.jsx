import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./cart-dropdown.styles.scss";
import CartItem from "components/cart-item/cart-item.component.jsx";
import CustomButton from "components/custom-button/custom-button.component.jsx";
import { toggleModal } from "redux/ducks/cart";

function CartDropdown() {
  const dispatch = useDispatch();
  const { isVisible, items } = useSelector((state) => state.cart);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton onClick={() => dispatch(toggleModal(!isVisible))}>
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
}

export default CartDropdown;
