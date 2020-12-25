import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import userReducer from './ducks/user';
import cartReducer from './ducks/cart';

const middlewares = [logger];

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store;