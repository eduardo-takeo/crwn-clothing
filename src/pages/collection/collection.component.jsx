import CollectionItem from "components/collection-item/collection-item.component";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { currentCollectionSelector } from "../../redux/ducks/shop";
import "./collection.styles.scss";

export default function CollectionPage() {
  const { collectionName } = useParams();
  const { items, title } = useSelector(
    currentCollectionSelector(collectionName)
  );

  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
