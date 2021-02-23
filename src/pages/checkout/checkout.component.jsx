import React from "react";
import { useSelector } from "react-redux";

import "./checkout.styles.scss";
import { FormatCurrency } from "../../utils/Format";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function CheckoutPage() {
  const { items, totalPrice } = useSelector((state) => state.cart);

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
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>Total: {FormatCurrency(totalPrice)}</span>
      </div>
    </div>
  );
}

export default CheckoutPage;
