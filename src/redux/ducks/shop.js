import SHOP_DATA from "mock/shop.data";
import { createSelector } from "reselect";

// CONSTANTS
const SHOP_DATA_REMAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

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
  createSelector([collectionSelector], (collection) =>
    collection.find((item) => item.id === SHOP_DATA_REMAP[collectionName])
  );
