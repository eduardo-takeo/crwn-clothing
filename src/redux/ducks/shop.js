import SHOP_DATA from "mock/shop.data";

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
