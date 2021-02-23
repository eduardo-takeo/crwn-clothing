import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import SHOP_DATA from "./shop.data.js";

import CollectionPreview from "../../components/collection-preview/collection-preview";
import { calculateTotal } from "redux/ducks/cart.js";

function ShopPage() {
  const [collections, setCollections] = useState([]);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);

  useEffect(() => {
    dispatch(calculateTotal(items));
  }, [items, dispatch]);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default ShopPage;
