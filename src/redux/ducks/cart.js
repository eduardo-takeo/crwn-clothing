// CONSTANTS
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const ADD_ITEM = 'ADD_ITEM';

// ACTIONS
export const toggleModal = status => ({
    type: TOGGLE_MODAL,
    isVisible: status
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
})

// REDUCERS
const initialState = {
    items: [],
    isVisible: false
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isVisible: action.isVisible
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.item]
            }

        default:
            return state;
    }
}