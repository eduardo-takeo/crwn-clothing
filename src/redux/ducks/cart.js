// CONSTANTS
const TOGGLE_MODAL = 'TOGGLE_MODAL';

// ACTIONS
export const toggleModal = status => ({
    type: TOGGLE_MODAL,
    isVisible: status
})

// REDUCERS
export default function cartReducer(state = { isVisible: false }, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                isVisible: action.isVisible
            }

        default:
            return state;
    }
}