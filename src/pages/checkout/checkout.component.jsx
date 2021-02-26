import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./checkout.styles.scss";
import { calculateTotal } from "redux/ducks/cart";
import { FormatCurrency } from "../../utils/Format";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

function CheckoutPage() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal(items));
  }, [items, dispatch]);

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
