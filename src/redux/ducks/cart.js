// CONSTANTS
const TOGGLE_MODAL = "TOGGLE_MODAL";
const ADD_ITEM = "ADD_ITEM";

// ACTIONS
export const toggleModal = (status) => ({
  type: TOGGLE_MODAL,
  isVisible: status,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

// REDUCERS
const initialState = {
  items: [],
  isVisible: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case ADD_ITEM:
      console.log("state", state);
      console.log("action", action);
      return {
        ...state,
        items: checkForExistingItem(action.item, state.items),
      };

    default:
      return state;
  }
}

// UTILS
const checkForExistingItem = (itemToAdd, cartItems) => {
  const existingItem = cartItems.find((item) => itemToAdd.id === item.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
