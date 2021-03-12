import React from "react";
import { useParams } from "react-router";

export default function CollectionPage() {
  const { collectionId } = useParams();
  // TODO: Build component based on collection items

  return (
    <div>
      <h1>Collection Page</h1>
    </div>
  );
}
