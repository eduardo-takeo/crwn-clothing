import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { currentCollectionSelector } from "../../redux/ducks/shop";

export default function CollectionPage() {
  const { collectionName } = useParams();
  const collection = useSelector(currentCollectionSelector(collectionName));

  // TODO: Build component based on collection

  return (
    <div>
      <h1>Collection Page</h1>
    </div>
  );
}
