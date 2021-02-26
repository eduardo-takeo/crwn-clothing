// CONSTANTS
const TOGGLE_MODAL = "TOGGLE_MODAL";
const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const CALCULATE_TOTAL = "CALCULATE_TOTAL";

// ACTIONS
export const toggleModal = (status) => ({
  type: TOGGLE_MODAL,
  isVisible: status,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const deleteItem = (item) => ({
  type: DELETE_ITEM,
  item,
});

export const calculateTotal = (cartItems) => ({
  type: CALCULATE_TOTAL,
  cartItems,
});

// REDUCERS
const initialState = {
  items: [],
  isVisible: false,
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: checkForExistingItem(action.item, state.items),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: removeItem(action.item, state.items),
      };
    case CALCULATE_TOTAL:
      return {
        ...state,
        totalPrice: calculateTotalPrice(action.cartItems),
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

const removeItem = (itemToRemove, cartItems) => {
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

const calculateTotalPrice = (cartItems) => {
  if (cartItems.length < 1) return 0;

  const values = cartItems.map((item) =>
    item.quantity > 1 ? item.price * item.quantity : item.price
  );
  return values.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};
