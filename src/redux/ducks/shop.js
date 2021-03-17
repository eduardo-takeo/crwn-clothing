import SHOP_DATA from "mock/shop.data";
import { createSelector } from "reselect";

// CONSTANTS

// ACTIONS

// REDUCERS
const initialState = {
  collection: SHOP_DATA,
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// SELECTORS
const collectionSelector = (state) => state.shop.collection;

export const currentCollectionSelector = (collectionName) =>
  createSelector(
    [collectionSelector],
    (collection) => collection[collectionName]
  );

export const previewCollectionSelector = createSelector(
  // Transform SHOP_DATA object into an array
  [collectionSelector],
  (collection) => Object.keys(collection).map((item) => collection[item])
);
