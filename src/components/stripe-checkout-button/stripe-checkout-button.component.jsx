import React from "react";
import StripeCheckout from "react-stripe-checkout";
import LogoIcon from "assets/crown.svg";

export default function StripeCheckoutButton({ price }) {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51IVpfUL38EpH10JGGfsTgB237GTuqH1A1XFeP8ZDrgytZHgfBjHNPHytCBggUDnFSF3QUWtp1XT8IElfalJl9xfa00o2OdnNcU";

  const onSuccess = (token) => {
    console.log(`token`, token);
    // TODO: Create Success message component
    alert("Payment succeded");
  };

  return (
    // TODO: Old version of Checkout, update to the new version
    <StripeCheckout
      stripeKey={publishableKey}
      image={LogoIcon}
      name="crwn-clothing"
      description={`Your total price is $${price}`}
      label="Continue"
      locale="us"
      shippingAddress
      billingAddress
      amount={stripePrice}
      token={onSuccess}
    />
  );
}
