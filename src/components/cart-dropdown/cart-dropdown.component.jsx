import React from "react";
import { useSelector } from "react-redux";

import "./cart-dropdown.styles.scss";
import CartItem from "components/cart-item/cart-item.component.jsx";
import CustomButton from "components/custom-button/custom-button.component.jsx";

function CartDropdown() {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
