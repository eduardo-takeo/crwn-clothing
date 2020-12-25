// CONSTANTS
const SET_USER = 'SET_USER';
const LOG_OUT = 'LOG_OUT';

// ACTIONS
export const setUser = userData => ({
    type: SET_USER,
    userData
});

export const logout = () => ({
    type: LOG_OUT,
});

// REDUCERS
export default function userReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                user: {},
                loggedIn: false
            }

        default:
            return state
    }
}