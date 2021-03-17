import CollectionPage from "pages/collection/collection.component";
import ShopCollection from "pages/shop-collection/shop-collection.component";
import React from "react";
import { Route, Switch } from "react-router";

export default function ShopPage({ match }) {
  return (
    <div>
      <Switch>
        <Route exact path={`${match.path}`} component={ShopCollection} />
        <Route
          path={`${match.path}/:collectionName`}
          component={CollectionPage}
        />
      </Switch>
    </div>
  );
}
