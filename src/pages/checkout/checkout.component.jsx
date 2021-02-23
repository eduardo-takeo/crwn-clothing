import React from "react";
import { useSelector } from "react-redux";

import "./checkout.styles.scss";

function CheckoutPage() {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
