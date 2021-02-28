import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import { calculateTotal } from "redux/ducks/cart.js";

function ShopPage() {
  const { items } = useSelector((state) => state.cart);
  const { collection } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal(items));
  }, [items, dispatch]);

  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
