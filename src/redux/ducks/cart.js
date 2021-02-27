// CONSTANTS
const TOGGLE_MODAL = "TOGGLE_MODAL";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
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

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
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
        items: addItemToCart(action.item, state.items),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: decreaseQuantity(action.item, state.items),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        items: clearItem(action.item, state.items),
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
const addItemToCart = (itemToAdd, cartItems) => {
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

const decreaseQuantity = (itemToRemove, cartItems) => {
  const existingItem = cartItems.find((item) => itemToRemove.id === item.id);

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems;
};

const clearItem = (itemToRemove, cartItems) => {
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
